import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/app/styles/profile/styles';

export default function Historico({ historico }: any) {
  return (
    <View style={styles.historico}>
      <Text>
        Data: {historico.data} - Hora: {historico.hora}
      </Text>
      <Text>Operador: {historico.operador}</Text>
      <Text>{historico.descricao}</Text>
    </View>
  );
}
