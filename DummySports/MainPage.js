import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Current Games</Text>
        <ScrollView horizontal={true}>
            <View style={styles.gamesContainer}>
                <View style={styles.gamesBorder}/>
                <View style={styles.gamesBorder}/>
                <View style={styles.gamesBorder}/>
            </View>
        </ScrollView>

        <Text style={styles.header}>Upcoming Games</Text>
        <ScrollView horizontal={true}>
            <View style={styles.gamesContainer}>
                <View style={styles.gamesBorder}/>
                <View style={styles.gamesBorder}/>
                <View style={styles.gamesBorder}/>
            </View>
        </ScrollView>
        
        <Text style={styles.header}>Popular Bets</Text>
        <ScrollView horizontal={true}>
            <View style={styles.gamesContainer}>
                <View style={styles.gamesBorder}/>
                <View style={styles.gamesBorder}/>
                <View style={styles.gamesBorder}/>
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0caca',
    // alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    color: '#2c2929',
    fontWeight: 'bold'
  },
  gamesContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#d0caca',
    // padding: 10,
    // margin: 5,
    flexDirection: 'row',
  },
  gamesBorder: {
    borderColor: '#2c2929',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 70,
    paddingVertical: 55,
    margin: 10,
    borderWidth: 2,
    flex: 0.3,
  },
});
