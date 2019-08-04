
🚀 React Native Boilerplate
===========================================

[![React Native](https://img.shields.io/badge/React%20Native-v0.60.4-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V3](https://img.shields.io/badge/React%20Navigation-v3.11-blue.svg)](https://reactnavigation.org/)


React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux thunk 
and redux persist. Latest version of react-navigation (v3.11).


## Features

* [Redux](http://redux.js.org/)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [React Navigation](https://reactnavigation.org/) 
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) 


## Prerequisites

* [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/duongtungls/react-native-boilerplate.git` <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `app.json` and replace `'RNApp'` by your project name 

6. Run `yarn install` or `npm install` to install dependencies

7. Run `react-native eject` to upgrade and add iOS & Android Folders.
  
8. Run `react-native link`

10. Latest versions of react-navigation uses gesture handler which is native module. For android you have to do some additional steps to configure them. Follow [these instructions](https://reactnavigation.org/docs/en/getting-started.html)
#### React Navigation should work fine even without these but when u need gestures or drawer navigation you need this setup


11. Start the packager with `npm start`
12. Connect a mobile device to your development machine
13. Run the test application:
  * On Android:
    * Run `npm run-android` or `react-native run-android`
  * On iOS:
    * Run `npm run-ios` or `react-native run-ios`
    OR
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
    
14. Enjoy!!!


## Contributing

PRs are welcome
