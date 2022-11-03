import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme/colors';
import {hp, wp} from '../utils/responsive-dimension';
import Input from './Input';

interface SearchInputT {
  onPressClose: (event: GestureResponderEvent) => void;
  handleSearch?: (text: string) => void;
}

const SearchInput: React.FC<SearchInputT> = ({handleSearch, onPressClose}) => {
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
    inputContainer: {
      flex: 1,
      marginRight: wp(16),
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <Input placeholder={'Search'} onChangeText={handleSearch} />
      </View>
      <TouchableOpacity onPress={onPressClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
