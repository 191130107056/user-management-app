import {StyleSheet} from 'react-native';
import {colors, moderateScale, verticalScale} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: verticalScale(70),
    backgroundColor: colors.black,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: moderateScale(24),
    height: verticalScale(24),
    tintColor: colors.white,
    marginRight: moderateScale(20),
  },
  heading: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    lineHeight: verticalScale(30),
  },
});
