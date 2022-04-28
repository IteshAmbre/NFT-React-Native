import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      //   SkipButtonComponent={Skip}
      //   NextButtonComponent={Next}
      onDone={() => {
        navigation.replace('Login');
      }}
      onSkip={() => {
        navigation.navigate('Login');
      }}
      pages={[
        {
          backgroundColor: '#fff',
          title: 'Onboarding',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          subtitle: 'Done with Onboarding Swiper',
        },
        {
          backgroundColor: '#fa2',
          title: 'Onboarding 2',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          subtitle: 'Done with Onboarding Swiper',
        },
        {
          backgroundColor: '#a76',
          title: 'Onboarding 3',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          subtitle: 'Done with Onboarding Swiper',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
