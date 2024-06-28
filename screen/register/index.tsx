import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import TextInputField from '../../component/input';
import {styles} from './style';
import MobileNumberInput from '../../component/mobileWIthcoutryCode';

export const RegisterPage = () => {
  const [state, setState] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });
  const handleChange = (e: any, key: string) => {
    debugger;
    setState({
      ...state,
      [key]: e?.target?.value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <ImageBackground
          source={require('../assets/bg.png')}
          resizeMode="contain"
          width={100}
          height={100}>
          <Image
            source={require('../assets/Group1.png')}
            resizeMethod="resize"
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.bgText}>Earn loyalty for every purchase</Text>
        </ImageBackground>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.headline}>Profile details</Text>
        <Text style={styles.subTitle}>
          Please provide your basic details to proceed further
        </Text>

        <TextInputField
          placeholder="Name"
          onChangeText={(e: any) => handleChange(e, 'name')}
          value={state?.name}
          numberOfLines={3}
          multiline
        />

        <MobileNumberInput
          onChangeText={(e: any) => handleChange(e, 'mobile')}
          value={state?.mobile}
          placeholder="mobile number"
        />

        <TextInputField
          placeholder="Email"
          onChangeText={(e: any) => handleChange(e, 'email')}
          value={state?.email}
          numberOfLines={3}
          multiline
        />

        <TextInputField
          placeholder="Address"
          onChangeText={(e: any) => handleChange(e, 'address')}
          value={state?.address}
          numberOfLines={5}
          multiline
        />

        <TouchableOpacity
          style={styles.fullWidthButton}
          onPress={() => Alert.alert('Registered')}>
          <Text style={styles.fullWidthButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
