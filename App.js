import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, } from 'react-native';
import styles from './Styles';
import Pdf from 'react-native-pdf';


export default function App() {

  const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
            console.log(error);
        }}
        onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}/>
    </View>
  );
}


