import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image style={styles.logo}
        source={require('./assets/dummysports.png')}/>
        <Text style={styles.header}>DummySports Header</Text>
      </View>
      <View style={styles.container}>
        <Text>DummySports</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    alignItems: 'center'
  },
  header: {
    fontSize: 20
  },
  logo: {
    width: 280,
    height: 20,
    margin: 20,
  }
});
