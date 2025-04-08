// src/components/Login/LoginHeader.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '@/src/app/styles/index/index';

export default function LoginHeader() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('@/src/app/images/logoconecta.png')}
      />
      <Text style={styles.slogan}>Você conectado com o mundo!</Text>
    </View>
  );
}
