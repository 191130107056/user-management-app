import { StyleSheet } from "react-native";
import { colors, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(20),
    justifyContent: "flex-start",
  },
  label: {
    fontSize: verticalScale(18),
    fontWeight: "700",
    lineHeight: verticalScale(30),
    color: colors.black,
  },
  value: {
    fontSize: verticalScale(18),
    fontWeight: "500",
    lineHeight: verticalScale(30),
    color: colors.grey,
  },
});
