import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import {hp, wp} from '../utils/responsive-dimension';

interface InputProps extends TextInputProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (arg: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChangeText,
  ...rest
}) => {
  return (
    <TextInput
      style={styles.inputContainer}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      // placeholderTextColor={'#eee'}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: wp(12),
    // marginHorizontal: wp(20),
    backgroundColor: '#EFEFEF',
    textAlign: 'left',
    fontSize: wp(16),
    padding: wp(16),
    color: '#000000',
  },
});

export default Input;
