/**
 * @format
 */
import {getStorybookUI, configure} from '@storybook/react-native';
import App from './App';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent(appName, () => App);

configure(() => {
  require('./src/stories.js'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
