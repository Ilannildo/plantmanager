import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.title,
        active && styles.titleActive
      ]}>{title}</Text>
    </RectButton>
  );
}

export default EnvironmentButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  titleActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
});