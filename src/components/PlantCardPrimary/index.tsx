import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string,
    photo: string,
  }
}

const PlantCardPrimary: React.FC<PlantCardProps> = ({ data, ...rest }) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={90}
      />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}

export default PlantCardPrimary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '50%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
});