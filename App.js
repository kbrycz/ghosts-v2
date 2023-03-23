import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen'
import AboutScreen from './src/screens/Home/AboutScreen'
import HowToScreen from './src/screens/Home/HowToScreen'
import StoreScreen from './src/screens/Home/StoreScreen'
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import CreateScreen from './src/screens/Pregame/CreateScreen';
import JoinScreen from './src/screens/Pregame/JoinScreen';
import LobbyScreen from './src/screens/Pregame/LobbyScreen';
import GameSettingsScreen from './src/screens/Pregame/GameSettingsScreen';
import GameScreen from './src/screens/Game/GameScreen';
import SplashScreen from './src/screens/Splash/SplashScreen';
import * as SplashScreenExpo from 'expo-splash-screen';


// Creates stack for the Home screens
const Home = createStackNavigator();
const HomeStack = () => {
  return (
    <Home.Navigator 
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          presentation: 'modal'
        }}>
        <Home.Screen name="Main" component={HomeScreen} />
        <Home.Screen name="About" component={AboutScreen} />
        <Home.Screen name="How" component={HowToScreen} />
        <Home.Screen name="Store" component={StoreScreen} />
    </Home.Navigator>
  )
}

// Creates stack for the Game screens
const Game = createStackNavigator();
const GameStack = () => {
  return (
    <Game.Navigator 
        initialRouteName="Gameplay"
        screenOptions={{
          headerShown: false,
          presentation: 'modal'
        }}>
        <Game.Screen name="Gameplay" component={GameScreen} />
        <Game.Screen name="HowToScreen" component={HowToScreen} />
    </Game.Navigator>
  )
}

// Creates stack for the Pregame screens
const Pregame = createStackNavigator();
const PregameStack = () => {
  return (
    <Pregame.Navigator 
        initialRouteName="Create"
        screenOptions={{
          headerShown: false,
          presentation: 'modal'
        }}>
        <Pregame.Screen name="Create" component={CreateScreen} />
        <Pregame.Screen name="Join" component={JoinScreen} />
        <Pregame.Screen name="StoreCreate" component={StoreScreen} />
    </Pregame.Navigator>
  )
}

// Creates stack for the Lobby screens
const Lobby = createStackNavigator();
const LobbyStack = () => {
  return (
    <Lobby.Navigator 
        initialRouteName="LobbyScreen"
        screenOptions={{
          headerShown: false,
          presentation: 'modal'
        }}>
        <Lobby.Screen name="LobbyScreen" component={LobbyScreen} />
        <Lobby.Screen name="HowTo" component={HowToScreen} />
        <Lobby.Screen name="GameSettings" component={GameSettingsScreen} />
        <Lobby.Screen name="StoreLobby" component={StoreScreen} />
    </Lobby.Navigator>
  )
}



const RootStack = createStackNavigator();

class App extends React.Component {

  // Initialize the App Screen state
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  // Loads all assets before screen renders
  // Allows for images and fonts to be in place when the screen is rendered
  async loadEverything() {
    // Keep the splash screen visible while we fetch resources
    await SplashScreenExpo.hideAsync();

    // Loads all the images
    await Asset.loadAsync([
      require('./assets/background.png'),
      require('./assets/circle.png'),  
      require('./assets/phantom.png'),  
    ]);

    // Loads all the fonts
    await Font.loadAsync({
      PatrickHand: require('./assets/fonts/PatrickHand-Regular.ttf'),
    });

    this.setState({loading: false})
}
 
  // Check and see if user already has a token to log user in
  componentDidMount() {
    this.loadEverything()
  }

  // Allows for fading between screens
  forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  // Renders the jsx for the UI
  render() {
    if (this.state.loading) {
      return (
        <View/>
      );
    } 
   else  {
      return( 
          <NavigationContainer>
             <RootStack.Navigator screenOptions={{
                headerShown: false,
                headerMode: 'none',
                animationEnabled: true,
                cardStyleInterpolator: this.forFade,
                gestureEnabled: false,
              }}>
              <RootStack.Screen name="Splash" component={SplashScreen}
              options={{ headerShown: false }}/>
              <RootStack.Screen name='Home' component={HomeStack} />
              <RootStack.Screen name="Game" component={GameStack} />            
              <RootStack.Screen name='Pregame' component={PregameStack} />
              <RootStack.Screen options={{
                }} name="Lobby" component={LobbyStack} />
           </RootStack.Navigator>
          </NavigationContainer>  
      );
    }
  }
}

export default function(props) {
    return <App {...props} />;
}