import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../theme/colors';
import {hp, wp} from '../utils/responsive-dimension';
import SearchIcon from '../assets/icons/searchIcon.svg';
import ArrowBack from '../assets/icons/arrowBack.svg';
import {useNavigation} from '@react-navigation/native';

interface HeaderT {
  title: string;
  subTitle: string;
  showSearchBtn?: boolean;
  showBackBtn?: boolean;
  titleContainerStyle?: StyleProp<ViewStyle>;
  onPressSearch?: (event: GestureResponderEvent) => void;
}

const Header: React.FC<HeaderT> = ({
  titleContainerStyle,
  subTitle,
  title,
  showSearchBtn = true,
  showBackBtn = false,
  onPressSearch,
}) => {
  const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: hp(12),
      paddingHorizontal: hp(24),
      borderBottomColor: colors.border,
      borderBottomWidth: wp(1),
    },
    titleContainer: {
      flex: 1,
      // marginLeft: wp(16),
    },
    subTitle: {
      fontSize: wp(14),
      fontFamily: 'Graphik-Medium',
      color: colors.grey3,
      lineHeight: hp(20.3),
    },
    title: {
      fontSize: wp(30),
      fontFamily: 'Graphik-Medium',
      color: colors.black,
      lineHeight: hp(30),
    },
  });

  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      {showBackBtn && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBack />
        </TouchableOpacity>
      )}
      <View style={[styles.titleContainer, titleContainerStyle]}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {showSearchBtn && (
        <TouchableOpacity onPress={onPressSearch}>
          <SearchIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
