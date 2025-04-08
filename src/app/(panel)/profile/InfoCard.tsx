// src/app/profile/components/InfoCard.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '@/src/app/styles/profile/styles';
import { Cliente } from '@/src/app/styles/profile/Cliente';



interface Props {
  cliente: Cliente;
}

export default function InfoCard({ cliente }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.rowSpaceBetween}>
        <Text style={styles.os}>{cliente.numero_os}</Text>
        <Text style={styles.id}>ID: {cliente.id}</Text>
      </View>
      <Text style={styles.info}>{cliente.nome}</Text>
      <Text style={styles.info}>{cliente.email}</Text>
      <Text style={styles.info}>{cliente.celular}</Text>
      <Text style={styles.info}>{cliente.telefone}</Text>
      <Text style={styles.info}>{cliente.endereco}</Text>
      <Text style={styles.info}>{cliente.bairro}</Text>
      <Text style={styles.info}>{cliente.cidade}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>ABERTURA</Text>
        <Text style={styles.date}>{cliente.abertura}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>AGENDAMENTO</Text>
        <Text style={styles.date}>{cliente.agendamento}</Text>
      </View>
    </View>
  );
}
