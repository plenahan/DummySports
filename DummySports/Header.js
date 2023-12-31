import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, Button, ScrollView } from 'react-native';
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
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.navContainer}>
            <TouchableOpacity title='' onPress={changeCollapsed}>
              <Menu style={styles.menu} />
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.expandedNav}>
                    <Button title='Home' style={styles.navItem}/>
                    <Button title='Profile' style={styles.navItem}/>
                    <Button title='Settings' style={styles.navItem}/>
                </View>
            </Collapsible>
        </View>
        <Image style={styles.logo}
            source={require('./assets/dummysports.png')}/>
      </View>
      <View style={styles.sportSliderBorder}>
        <ScrollView horizontal={true}>
            <Button title="NBA" color='#a675f1'/>
            <Button title="NFL" color='#a675f1'/>
            <Button title="CBB" color='#a675f1'/>
            <Button title="CFB" color='#a675f1'/>
          </ScrollView> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    zIndex: 1,
    // borderColor: 'black',
    // borderWidth: 2,
    marginTop: 20,
    backgroundColor: '#e9eaee'
  },
  logo: {
    width: 280,
    height: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  },
  menu: {
    color: '#a675f1',
    // position: 'absolute'
  },
  navContainer: {
    position: 'absolute',
    zIndex: 10
  },
  expandedNav: {
    display: 'block',
    // marginLeft: 10,
    backgroundColor: '#e9eaee',
  },
  navItem: {
    fontSize: 20,
    color: 'white',
  },
  sportSliderBorder: {
    borderColor: '#4d3745',
    borderWidth: 0,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e9eaee',
    borderRadius: 20
  },
});
