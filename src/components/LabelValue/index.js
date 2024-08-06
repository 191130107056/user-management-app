import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const LabelValue = ({ label, value }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{`${label}:  `}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default LabelValue;
