import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Menu from './assets/nav.svg';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';


export default function Header() {
    const [isCollapsed, setCollapsed] = useState(true)

    function changeCollapsed() {
        if(isCollapsed){
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    }

  return (
      <View style={styles.headerContainer}>
        <View style={styles.navContainer}>
            <TouchableOpacity title='' onPress={changeCollapsed}>
            <Menu style={styles.menu} />
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.expandedNav}>
                    <Text>Home</Text>
                    <Text>Profile</Text>
                    <Text>Settings</Text>
                </View>
            </Collapsible>
        </View>
        <Image style={styles.logo}
            source={require('./assets/dummysports.png')}/>
      </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    // borderColor: 'black',
    // borderWidth: 2,
    marginTop: 20,
  },
  logo: {
    width: 280,
    height: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4
  },
  menu: {
    color: '#0DEE68',
    // position: 'absolute'
  },
  navContainer: {
    display: 'block'
  },
  expandedNav: {
    display: 'block',
  }
});
