import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";

const UserListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header heading={"Users"} isBack={false} />
    </View>
  );
};

export default UserListScreen;
