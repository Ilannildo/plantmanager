import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

import Routes from './src/Routes';
import { PlantProps } from './src/libs/storage';
import { Alert } from 'react-native';


export default function App() {
  const [fonstLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notification => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   });

    // return () => subscription.remove();

    async function notifications() {
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log('NOTIFICAÇÕES AGENDADAS #####')
      console.log(data)
    }

    notifications()

  }, []);

  useEffect(() => {
    async function allowsNotificationsAsync() {
      const settings = await Notifications.getPermissionsAsync();
      return (
        settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
      );
    }

    allowsNotificationsAsync();
    // async function requestPermissionsAsync() {
    //   await SplashScreen.hideAsync();

    //   async function defaultRequestNotifications() {
    //     return await Notifications.requestPermissionsAsync({
    //       android: {},
    //     });
    //   }

    //   // Obter as permissões garantidas
    //   const settings = await defaultRequestNotifications();
    //   // Se não permitido, pede novamente
    //   if (!(settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL)) {
    //     Alert.alert('Acesso às notificações', 'Para a melhor experiência in-app, dê acesso às notificações.', [
    //       {
    //         text: "Não 😤",
    //         style: "cancel",
    //       },
    //       {
    //         text: "Sim 😎",
    //         onPress: defaultRequestNotifications,
    //       },
    //     ])
    //   }
    // }

    // requestPermissionsAsync();
  }, []);

  if (!fonstLoaded) {
    return (
      <AppLoading />
    );
  }

  return (
    <Routes />
  );
}

