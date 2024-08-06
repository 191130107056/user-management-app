import { StyleSheet } from "react-native";
import { colors, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error:{
        paddingTop: verticalScale(20),
        fontSize: verticalScale(18),
        lineHeight: verticalScale(30),
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: colors.red,
        textAlign: 'center',
      },
      retryButton:{
        marginTop:verticalScale(20),
        width: moderateScale(150),
        alignSelf: 'center',
        borderBlockColor: colors.blue,
        borderWidth: 1,
        borderRadius: verticalScale(10),
        paddingVertical: verticalScale(10),
      },
      retryButtonText:{
        fontSize: verticalScale(18),
        lineHeight: verticalScale(30),
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: colors.blue,
        textAlign: 'center',
        
      }
})