import React, {FC} from 'react';
import Posts from '../../views/screens/Posts/PostsScreen';
import PressableAccountAvatar from '../../views/atoms/PressableAccountAvatar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {observer} from 'mobx-react-lite';
import AccountModel from '../../models/AccountModel';
import TopNavigationHeader from '../header/TopNavigationHeader';
import AddPostScreen from '../../views/screens/Posts/AddPostScreen';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
  const MainStackComponents: React.ComponentProps<typeof Tab.Screen>[] = [
    {
      name: 'Posts',
      component: Posts,
      options: {
        headerRight: () => (
          <PressableAccountAvatar
            image={AccountModel.avatar || AccountModel.avatarPlaceholder}
          />
        ),
      },
    },
    {
      name: 'AddPost',
      component: AddPostScreen,
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        header: ({route, options}) => (
          <TopNavigationHeader title={route.name} right={options.headerRight} />
        ),
      }}>
      {MainStackComponents.map(screen => (
        <Tab.Screen
          key={screen.name}
          {...screen}
          component={screen.component as FC}
        />
      ))}
    </Tab.Navigator>
  );
};

export default observer(MainTabs);
