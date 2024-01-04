import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, Button } from 'react-native';
import Home from './assets/home.svg'
import DollarSign from './assets/dollar-sign.svg'
import Leaderboard from './assets/leaderboard.svg'
import Settings from './assets/settings.svg'
import User from './assets/social.svg'
import Coin from './assets/dummy-coin2.svg'
export default function Footer() {
  return (
    <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerItems}>
            <Home style={styles.color}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <Leaderboard style={styles.color}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <User style={styles.color}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <Coin/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <Settings style={styles.color}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    zIndex: 1,
    justifyContent: 'center',
  },
  footerItems: {
    marginLeft: '4.5%',
    marginRight: '4.5%',
  },
  color: {
      color: '#a675f1'
  }
});
