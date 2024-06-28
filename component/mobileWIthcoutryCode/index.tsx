import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

interface MobileWithCountryCodeProps {
  onChangeText: (e: any, key?: string) => void;
  value: any;
  placeholder: string;
  numberOfLines?: number;
  multiline?: boolean;
}
const MobileWithCountryCode = (props: MobileWithCountryCodeProps) => {
  const {
    onChangeText = () => false,
    value = '',
    placeholder = '',
    numberOfLines = 3,
    multiline = true,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.code}>
        <Image source={require('../assets/india.png')} />
        <TextInput value="+91" />
        <Image source={require('../assets/dropdown1.png')} />
        <View style={styles.codeDiv} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        disableFullscreenUI={true}
        numberOfLines={numberOfLines}
        keyboardType='phone-pad'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E6EAEB',
    height: 78,
    borderRadius: 8,
    marginBottom: 6,
    marginTop: 6,
    paddingLeft: 8,
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  codeDiv: {
    borderRightWidth: 1,
    borderColor: '#B3B8BB',
    borderWidth: 1,
    height: 40,
    marginLeft: 12,
  },
  input: {
    margin: 10,
    width: '70%',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#E6EAEB'
  },
});

export default MobileWithCountryCode;
