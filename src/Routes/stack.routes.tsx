import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';

import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSelect from '../pages/PlantSelect';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';
import AuthRoutes from './tab.routes';

const stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <stack.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <stack.Screen
        name="Confirmation"
        component={Confirmation}
      />
      <stack.Screen
        name="AuthRoutes"
        component={AuthRoutes}
      />
      <stack.Screen
        name="PlantSave"
        component={PlantSave}
      />
    </stack.Navigator>
  );
}
export default AppRoutes;
