import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface TextInputFieldProps {
  onChangeText: (e: any, key?: string) => void;
  value: any;
  placeholder: string;
  numberOfLines?: number;
  multiline?: boolean;
}
const TextInputField = (props: TextInputFieldProps) => {
  const {
    onChangeText = () => false,
    value = '',
    placeholder = '',
    numberOfLines = 0,
    multiline = false,
  } = props;
  return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderWidth: 1,
    width: '100%',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: '#D9DBDD',
    backgroundColor: '#FFF',
  },
});

export default TextInputField;
