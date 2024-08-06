import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../theme';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  listContainer: {
    paddingBottom: verticalScale(50)
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    paddingVertical: verticalScale(16),
  },
  userName: {
    fontSize: verticalScale(18),
    lineHeight: verticalScale(30),
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: colors.black,
  },
  userEmail: {
    fontSize: verticalScale(14),
    lineHeight: verticalScale(18),
    fontWeight: '500',
    fontFamily: 'serif',
    color: colors.grey,
  },
  userImage: {
    width: verticalScale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(25),
    marginRight: moderateScale(10),
    borderColor: colors.black,
    borderWidth: 2,
  },
});