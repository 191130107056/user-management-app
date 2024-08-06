import { StatusBar, StyleSheet } from "react-native";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import { colors } from "./src/theme";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <AppNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
