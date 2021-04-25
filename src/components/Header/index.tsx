import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../../assets/user_avatar.jpeg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface HeaderProps {

}

const Header: React.FC = () => {
  const [userName, setUsername] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:username');

      setUsername(user || '');
    }

    loadStorageUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View>
        <Image style={styles.image} source={userImg} />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});