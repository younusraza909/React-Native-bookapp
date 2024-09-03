import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import useAI from '../hooks/useAI';
import RenderHTML from 'react-native-render-html';

interface IBookSummary {
  title: string;
  authors: string[];
}
const BookSummary = (props: IBookSummary) => {
  const {title, authors} = props;

  const prompt = `Generate a detailed book summary of the book titled ${title} by ${authors.join(
    ', ',
  )}, use proper HTML tags to format the summary`;

  const {width} = useWindowDimensions();
  const {data, isFetching, error, refetch} = useAI(prompt);

  if (isFetching) return <ActivityIndicator color="#4ecdc4" />;

  if (error) return <Text>Error</Text>;

  if (data)
    return (
      <RenderHTML
        contentWidth={width}
        source={{html: `<section style="color: white;">${data}</section>`}}
      />
    );
  return (
    <Pressable style={styles.btn} onPress={() => refetch()}>
      {isFetching ? (
        <ActivityIndicator color="#4ecdc4" />
      ) : (
        <Text style={styles.btnText}>Book Summary</Text>
      )}
    </Pressable>
  );
};

export default BookSummary;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4ecdc4',
    alignSelf: 'flex-start',
  },
  btnText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
});
