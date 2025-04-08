import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useAtendimentos } from '@/src/app/styles/profile/useAtendimentos';
import { AtendimentoCard } from './AtendimentoCard';
import { styles } from '@/src/app/styles/profile/atendimentos';

// Componente principal da tela de Tipos de Atendimentos
export default function TiposAtendimento() {
  const { resultados, descFuncionario, loading } = useAtendimentos();

  return (
    <View style={{ flex: 1, backgroundColor: '#0b005c' }}>
      {/* Cabeçalho do técnico */}
      <View style={styles.topSection}>
        <Text style={styles.logotext}>Conecta Técnico</Text>
        <Text style={styles.tecnicoText}>{descFuncionario || ''}</Text>
      </View>

      {/* Seção branca com os cards */}
      <View style={styles.whiteBox}>
        <Text style={styles.atendimentosTitle}>Atendimentos: Conecta Internet</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <FlatList
            data={resultados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <AtendimentoCard item={item} />}
          />
        )}
      </View>
    </View>
  );
}