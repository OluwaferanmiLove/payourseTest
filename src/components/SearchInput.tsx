import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';
import {colors} from '../theme/colors';
import {hp, wp} from '../utils/responsive-dimension';
import Input from './Input';

interface SearchInputT {
  onPressClose: (event: GestureResponderEvent) => void;
  handleSearch?: (text: string) => void;
  searchInputTestID?: string;
  inputTestID?: string;
  closeBtnTestID?: string;
}

const SearchInput: React.FC<SearchInputT> = ({
  handleSearch,
  onPressClose,
  searchInputTestID,
  inputTestID,
  closeBtnTestID,
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
    inputContainer: {
      flex: 1,
      marginRight: wp(16),
    },
  });

  return (
    <View style={styles.main} testID={searchInputTestID}>
      <View style={styles.inputContainer}>
        <Input
          placeholder={'Search'}
          onChangeText={handleSearch}
          testID={inputTestID}
        />
      </View>
      <TouchableOpacity onPress={onPressClose} testID={closeBtnTestID}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
