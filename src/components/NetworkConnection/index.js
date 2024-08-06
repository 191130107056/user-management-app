import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { strings } from "../../theme";
import { styles } from "./styles";

const NetworkConnection = ({ error, handleRefresh }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.error}>{error}</Text>
      <TouchableOpacity onPress={handleRefresh} style={styles.retryButton}>
        <Text style={styles.retryButtonText}>{strings.retry}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NetworkConnection;
