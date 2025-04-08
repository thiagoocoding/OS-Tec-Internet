import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '@/src/app/styles/profile/styles';

export default function LoginsAcesso({ logins }: any) {
  return (
    <View style={styles.loginSection}>
      <Text style={styles.loginTitle}>LOGINS DE ACESSO</Text>
      {logins.map((login: any, index: number) => (
        <View key={index} style={styles.loginItem}>
          <Text style={styles.loginText}>{login.login}</Text>
          <Text>{login.mac}</Text>
          <View style={styles.loginButtons}>
            <TouchableOpacity style={styles.buttonGray}>
              <Text style={styles.buttonText}>EXCLUIR MAC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGray}>
              <Text style={styles.buttonText}>SENHA</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}
