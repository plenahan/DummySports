import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Games</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
  }
});
