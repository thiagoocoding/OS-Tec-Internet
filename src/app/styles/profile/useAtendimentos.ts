import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Atendimento } from './types';

// Hook responsável por buscar os atendimentos da API
export function useAtendimentos() {
  const [resultados, setResultados] = useState<Atendimento[]>([]);
  const [descFuncionario, setDescFuncionario] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAtendimentos();
  }, []);

  const fetchAtendimentos = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      const id_funcionario = await AsyncStorage.getItem('id_funcionario');

      if (!token || !id_funcionario) {
        Alert.alert('Erro', 'Token ou ID do funcionário não encontrado.');
        return;
      }

      const response = await fetch(
        'https://conectainternet.vigoweb.com.br/api/app_getcustom',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            campo1: 'id_funcionario',
            campo1_valor: id_funcionario,
            campo2: 'none',
            campo2_valor: 'none',
          }),
        }
      );

      const result = await response.json();

      const atendimentos: Atendimento[] = Array.isArray(result)
        ? result
        : Array.isArray(result.data)
        ? result.data
        : [];

      const filtrados = atendimentos.filter(
        (item) => item.dt_fechamento === '0001-01-01T00:00:00'
      );

      if (filtrados.length === 0) {
        Alert.alert('Aviso', 'Nenhum atendimento encontrado com fechamento válido.');
      }

      if (filtrados.length > 0 && filtrados[0].desc_funcionario) {
        setDescFuncionario(filtrados[0].desc_funcionario.toUpperCase());
      }

      setResultados(filtrados);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível buscar os atendimentos.');
    } finally {
      setLoading(false);
    }
  };

  return { resultados, descFuncionario, loading };
}
