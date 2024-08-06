import {StyleSheet} from 'react-native';
import { colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    paddingVertical: verticalScale(30),
    paddingHorizontal: moderateScale(16),
  },
  image: {
    width: verticalScale(200),
    height: verticalScale(200),
    borderRadius: verticalScale(100),
    marginBottom: verticalScale(20),
    borderColor: colors.black,
    borderWidth: 2,
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  name: {
    fontSize: verticalScale(24),
    fontWeight: 'bold',
    lineHeight: verticalScale(50),
    color: colors.black,
    alignSelf: 'center',
  },
  
});
