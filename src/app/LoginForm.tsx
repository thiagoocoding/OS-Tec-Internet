// src/components/Login/LoginForm.tsx
import React from 'react';
import {View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '@/src/app/styles/index/index';

type Props = {
  email: string;
  setEmail: (text: string) => void;
  senha: string;
  setSenha: (text: string) => void;
  lembrarLogin: boolean;
  setLembrarLogin: (value: boolean) => void;
  onSubmit: () => void;
  loading: boolean;
};

export default function LoginForm({
  email,
  setEmail,
  senha,
  setSenha,
  lembrarLogin,
  setLembrarLogin,
  onSubmit,
  loading,
}: Props) {
  return (
    <View style={styles.form}>
      <Text style={styles.login}>Login:</Text>
      <TextInput
        placeholder="Digite seu login..."
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.senha}>Senha:</Text>
      <TextInput
        placeholder="Digite sua senha..."
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.thiagocoding}>desenvolvido por @thiagocoding</Text>

      <Pressable
        style={styles.lembrarContainer}
        onPress={() => setLembrarLogin(!lembrarLogin)}
      >
        <View
          style={[
            styles.lembrarCheckbox,
            lembrarLogin && styles.lembrarCheckboxAtivo,
          ]}
        >
          {lembrarLogin && <Feather name="check" size={18} color="white" />}
        </View>
        <Text style={styles.lembrarTexto}>Lembrar usuário e senha</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Text>
      </Pressable>
    </View>
  );
}
