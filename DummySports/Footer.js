import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, Button } from 'react-native';
import Home from './assets/home.svg'
import DollarSign from './assets/dollar-sign.svg'
import Leaderboard from './assets/leaderboard.svg'
import Settings from './assets/settings.svg'
import User from './assets/social.svg'

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerItems}>
            <Home />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <Leaderboard/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <User/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <DollarSign/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItems}>
            <Settings/>
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
    marginLeft: '5%',
    marginRight: '5%',
  }
});
