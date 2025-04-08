import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/app/styles/profile/styles';

export default function AtendimentoTipo({ texto, titulo }: any) {
  return (
    <>
      <View style={styles.atendimentoTipo}>
        <Text style={styles.atendimentoTexto}>{texto}</Text>
      </View>
      <View style={styles.tituloSection}>
        <Text style={styles.tituloTexto}>{titulo}</Text>
      </View>
    </>
  );
}
