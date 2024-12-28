import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { 
  useAnimatedStyle, 
  withSpring,
  FadeIn 
} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 4;
const PADDING_HORIZONTAL = 20;
const USABLE_WIDTH = width - (PADDING_HORIZONTAL * 2);
const ITEM_WIDTH = USABLE_WIDTH / 4;

export default function CustomTabBar({ state, descriptors, navigation }: any) {
  const theme = useTheme();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(state.index * ITEM_WIDTH)
        }
      ]
    };
  });

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.container}>
        <Animated.View 
          style={[
            styles.indicator, 
            { backgroundColor: theme.colors.primary },
            animatedStyles
          ]} 
        />
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const getIconName = () => {
            switch (route.name) {
              case 'Home':
                return 'home';
              case 'Search':
                return 'magnify';
              case 'Settings':
                return 'cog';
              case 'Profile':
                return 'account';
              default:
                return 'circle';
            }
          };

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tab}
            >
              <Animated.View entering={FadeIn}>
                <MaterialCommunityIcons
                  name={getIconName()}
                  size={24}
                  color={isFocused ? '#fff' : theme.colors.outline}
                />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 25,
    left: PADDING_HORIZONTAL,
    right: PADDING_HORIZONTAL,
    height: 60,
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    height: '100%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  indicator: {
    width: ITEM_WIDTH,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 5,
    left: 0,
    zIndex: 0,
  },
  tab: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  }
});
