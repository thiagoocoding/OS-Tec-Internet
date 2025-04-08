import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '@/src/app/styles/profile/styles';

export default function VerTrajetoButton() {
  return (
    <TouchableOpacity style={styles.botaoVerTrajeto}>
      <Text style={styles.verTrajetoTexto}>VER TRAJETO</Text>
    </TouchableOpacity>
  );
}
