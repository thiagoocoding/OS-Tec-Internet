import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import InfoCard from './InfoCard';
import LoginsAcesso from './LoginsAcesso';
import AtendimentoTipo from './AtendimentoTipo';
import Historico from './Historico';
import VerTrajetoButton from './VerTrajetoButton';
import { styles } from '@/src/app/styles/profile/atendimentos';
import { Cliente } from '@/src/app/styles/profile/Cliente'; // Importa o tipo

export default function InfoCliente() {
  const { cliente } = useLocalSearchParams();

  const clienteData: Cliente | null = cliente
    ? JSON.parse(decodeURIComponent(cliente as string))
    : null;

  if (!clienteData) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          Dados do cliente não encontrados.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tecnicoText}>vigo</Text>
      </View>

      <InfoCard cliente={clienteData} />
      <LoginsAcesso logins={clienteData.abertura || []} />
      <AtendimentoTipo
        texto={clienteData.abertura || ''}
        titulo={clienteData.nome || ''}
      />
      <Historico historico={clienteData.agendamento || {}} />
      <VerTrajetoButton />
    </ScrollView>
  );
}
