/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import {name as appName} from './app.json';
// export { default as MyHome } from './src/MyHome';
// export { default as Auth } from './src/Auth';
// export { default as About } from './src/About';

AppRegistry.registerComponent(appName, () => App);
