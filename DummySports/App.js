import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.mainPageContainer}>
        <MainPage/>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eaee',
    // alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainPageContainer: {
    zIndex: -1,
  }
});
