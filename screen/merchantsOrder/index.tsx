import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Icon, Button, Divider, Tab, Chip} from 'react-native-elements';
import chicken from '../assets/chickenfull.jpg';
import Vegtable from '../assets/veg.jpg';
import juice from '../assets/juice.png';
import leg from '../assets/chickenLeg.png';
import special from '../assets/special.jpg';
import rating from '../assets/rating.png';
import location from '../assets/location.jpg';
import user from '../assets/user.jpg';
import fastForward from '../assets/fastForward.png';
import backArrorw from '../assets/backArrorw.jpg';
import coffee from '../assets/coffee.png';
import {styles} from './style';

export const MerchantDetails = () => {
  const [activeChip, setActiveChip] = useState<number | string>('All');
  const [itemCount, setItemCount] = useState<any>(0);
  const chipList = [
    {
      label: 'All',
      type: 'outline',
      id: '1',
    },
    {
      label: 'Combo',
      type: 'outline',
      id: '2',
      icon: leg,
    },
    {
      label: 'Special',
      type: 'outline',
      id: '3',
      icon: special,
    },
    {
      label: 'Drinks',
      type: 'outline',
      id: '4',
      icon: coffee,
    },
  ];
  const itemList = [
    {
      id: '1',
      name: 'Super Family Package',
      price: '12.000',
      image: chicken,
      variant: '2 chicken, 1 salad, 1 drink...',
    },
    {
      id: '2',
      name: 'Vegtable',
      price: '10.000',
      image: Vegtable,
      variant: 'Tomoto, cucumber, onion...',
    },
    {
      id: '3',
      name: 'Chicken Grill Full',
      price: '15.000',
      image: chicken,
      variant: 'Full grill chicken...',
    },
    {
      id: '4',
      name: 'Special Orange Juice',
      price: '9.000',
      image: juice,
      variant: 'Watermelon, orange juice...',
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 14,
        }}>
        <View style={styles.subContainer}>
          <View style={{...styles.header, flexDirection: 'row', gap: 6}}>
            <Image source={backArrorw} style={{width: 20, height: 24}} />
            <Text style={styles.headerText}> Merchant Detail</Text>
          </View>
          <View>
            <View style={styles.merchantInfo}>
              <Image source={chicken} style={styles.menuItemImage} />
              <View style={{...styles.flex, paddingLeft: 8}}>
                <Text style={styles.merchantName}>Chicken Lalapan Gresik</Text>
                <Text style={styles.merchantAddress}>
                  4831 Kildeer, Boynton Beach, Florida 33436
                </Text>
              </View>
            </View>
            <Divider insetType="middle" style={{marginBottom: 6}} />
            <View style={styles.merchantStats}>
              <View style={styles.vertical}>
                <View style={styles.flex}>
                  <View style={styles.subFlex}>
                    <Image source={rating} style={{width: 20, height: 24}} />
                    <Text style={styles.statText}>4.8</Text>
                  </View>
                  <Text style={styles.subText}>Check reviews</Text>
                </View>
                <Divider orientation="vertical" style={styles.divider} />
                <View style={styles.flex}>
                  <View style={styles.subFlex}>
                    <Image source={location} style={{width: 20, height: 24}} />
                    <Text style={styles.statText}>2.69 km</Text>
                  </View>
                  <Text style={styles.subText}>Distance</Text>
                </View>
              </View>
              <View style={styles.vertical}>
                <Divider orientation="vertical" style={styles.divider} />
                <View style={styles.flex}>
                  <View style={styles.subFlex}>
                    <Image source={user} style={{width: 20, height: 24}} />
                    <Text style={styles.statText}>1k+ ratings</Text>
                  </View>
                  <Text style={styles.subText}>Good Taste</Text>
                </View>
              </View>
            </View>
          </View>
          <Divider insetType="middle" />
          <View style={styles.menuTabs}>
            {chipList?.map((v: any, i: number) => (
              <Chip
                title={v?.label}
                type={v?.type}
                key={i}
                icon={
                  i === 0 ? <></> : (
                    <Image
                      source={v?.icon}
                      style={{width: 20, height: 24, marginLeft: 6}}
                    />
                  )
                } // {v?.icon}
                iconPosition="right"
                onPress={() => setActiveChip(v?.label)}
                buttonStyle={
                  activeChip === v?.label
                    ? styles.activeButtonStyle
                    : styles.inactiveButtonStyle
                }
                titleStyle={
                  activeChip === v?.label
                    ? styles.activeTitleStyle
                    : styles.inactiveTitleStyle
                }
              />
            ))}
          </View>
        </View>
        <ScrollView style={styles.menu}>
          <View style={{...styles.subFlex, alignItems: 'center', gap: 6}}>
            <Text
              style={{
                ...styles.menuItemName,
                marginBottom: 6,
                flexDirection: 'row',
              }}>
              {activeChip}
            </Text>
            <Image
              source={
                activeChip === 'All'
                  ? ''
                  : activeChip === 'Combo'
                  ? leg
                  : activeChip === 'Drinks'
                  ? coffee
                  : special
              }
              style={{width: 24, height: 24}}
            />
          </View>
          {itemList?.map((v: any, i: number) => (
            <View style={styles.menuItem} key={i}>
              <Image source={v?.image} style={styles.menuItemImage} />
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemName}>{v?.name}</Text>
                <Text style={styles.subText}>{v?.variant}</Text>
                <Text style={styles.menuItemPrice}>${v?.price}</Text>
              </View>
              <View style={styles.menuItemCounter}>
                <View style={styles.counterButton}>
                  <Text
                    style={styles.counterText}
                    onPress={() => setItemCount(itemCount - 1)}>
                    -
                  </Text>
                </View>
                <Text style={{...styles.counterText, color: '#000'}}>
                  {itemCount}
                </Text>
                <View style={styles.counterButton}>
                  <Text
                    style={styles.counterText}
                    onPress={() => setItemCount(itemCount + 1)}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.counterText}>$45.00</Text>
          <TouchableHighlight
            style={styles.checkoutButton}
            onPress={() => Alert.alert('Your order is Placed')}>
            <View>
              <Text style={{fontWeight: '600', fontSize: 14}}>
                {itemCount} {' Food Selected'}
              </Text>
            </View>
          </TouchableHighlight>
          <Image source={fastForward} style={{width: 26, height: 24}} />
        </View>
      </View>
    </View>
  );
};
