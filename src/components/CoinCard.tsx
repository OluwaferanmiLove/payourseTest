import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../theme/colors';
import {wp, hp} from '../utils/responsive-dimension';

interface CoinCardT {
  marginHorizontal?: number;
  marginVertical?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  customStyles?: StyleProp<ViewStyle>;
  image: any;
  coinName: string;
  coinCode: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CoinCard: React.FC<CoinCardT> = ({
  marginHorizontal = wp(24),
  marginVertical = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,
  customStyles = {},
  image,
  coinName,
  coinCode,
  onPress,
  ...rest
}) => {
  const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal,
      marginVertical,
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
      paddingVertical: hp(3),
    },
    image: {
      width: wp(32),
      height: hp(32),
    },
    textContainer: {
      flex: 1,
      marginLeft: wp(16),
    },
    subTitle: {
      fontSize: wp(13),
      fontFamily: 'Graphik-Regular',
      color: colors.grey3,
      lineHeight: hp(20.3),
    },
    title: {
      fontSize: wp(16),
      fontFamily: 'Graphik-Regular',
      color: colors.black,
      lineHeight: hp(22.4),
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.main, customStyles]}
      {...rest}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{coinName}</Text>
        <Text style={styles.subTitle}>{coinCode}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CoinCard;
