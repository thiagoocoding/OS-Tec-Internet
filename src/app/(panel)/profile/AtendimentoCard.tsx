import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Atendimento } from '@/src/app/styles/profile/types';
import { styles } from '@/src/app/styles/profile/atendimentos';
import { useRouter } from 'expo-router';



interface Props {
  item: Atendimento;
}

// Componente visual de card para um atendimento
export function AtendimentoCard({ item }: Props) {
  const router = useRouter();

  const data =
    item.dt_agendamento?.split('T')[0]?.split('-').reverse().join('/') || 'Data desconhecida';
  const telefone = item.celular || item.telefone || 'Sem telefone';

  const agendamentoDate = new Date(item.dt_agendamento);
  const agora = new Date();
  const diffHoras = (agora.getTime() - agendamentoDate.getTime()) / (1000 * 60 * 60);
  const passou48Horas = diffHoras > 48;
  const corBorda = passou48Horas ? 'red' : 'green';

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/(panel)/profile/InfoCliente',
          params: {
            id: item.id.toString(),
            os: item.numero_os,
          },
        })
      }
      activeOpacity={0.7}
    >
      <View style={[styles.card, { borderLeftColor: corBorda }]}>
        <Text style={styles.cardTitle}>
          {item.numero_os} - {data}
        </Text>
        <Text style={styles.cardDescricao}>{item.descricao}</Text>
        <Text style={styles.cardNome}>{item.nome}</Text>
        <Text>{item.endereco}</Text>
        <Text>
          {item.bairro}, {item.cidade}
        </Text>
        <Text style={styles.cardContato}>📞 {telefone}</Text>
      </View>
    </TouchableOpacity>
  );
}
