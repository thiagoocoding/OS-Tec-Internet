// src/app/(panel)/index.tsx
import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import { loginUser } from '@/src/app/lib/auth';
import { styles } from '@/src/app/styles/index/index';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarLogin, setLembrarLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Carrega credenciais salvas ao iniciar o app
  useEffect(() => {
    const loadCredentials = async () => {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedSenha = await AsyncStorage.getItem('senha');
      if (savedEmail && savedSenha) {
        setEmail(savedEmail);
        setSenha(savedSenha);
        setLembrarLogin(true);
      }
    };
    loadCredentials();
  }, []);

  // Função de login chamada ao clicar em "Entrar"
  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const result = await loginUser(email, senha);
      const token = result?.token || result?.access_token || result?.senha;
      const idFuncionario = result?.id_funcionario || result?.id || '';

      if (!token || !idFuncionario) {
        throw new Error('Token ou ID do funcionário inválido.');
      }

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('id_funcionario', String(idFuncionario));

      if (lembrarLogin) {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('senha', senha);
      } else {
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('senha');
      }

      router.replace('/(panel)/profile/Atendimentos');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Falha no login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('@/src/app/images/pginfundo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <LoginHeader />
        <LoginForm
          email={email}
          setEmail={setEmail}
          senha={senha}
          setSenha={setSenha}
          lembrarLogin={lembrarLogin}
          setLembrarLogin={setLembrarLogin}
          onSubmit={handleLogin}
          loading={loading}
        />
      </View>
    </ImageBackground>
  );
}
