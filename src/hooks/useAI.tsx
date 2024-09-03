import {GoogleGenerativeAI} from '@google/generative-ai';
import {AI_API_KEY} from '@env';
import {useQuery} from '@tanstack/react-query';

const genAI = new GoogleGenerativeAI(AI_API_KEY);
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

const useAI = (prompt: string) => {
  async function generateContent() {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  }

  return useQuery({
    queryKey: [prompt],
    queryFn: generateContent,
    enabled: false,
  });
};

export default useAI;
