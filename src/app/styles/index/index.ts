// src/styles/Login.styles.ts (ou onde preferir organizar)
import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  form: {
    padding: 16,
  },
  login: {
    marginBottom: 8,
    color: '#fff',
  },

  senha: {
    marginBottom: 8,
    color: '#fff',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logo: {
    width: 220,
    height: 150,
    resizeMode: 'contain',
  },
  slogan: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 34,
  },

  lembrarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    
  },
  lembrarCheckbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  lembrarCheckboxAtivo: {
    backgroundColor: '#007bff',
  },
  lembrarTexto: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 20, // pra alinhar verticalmente dentro da caixa
  },

  thiagocoding: {
    color: 'white',
    justifyContent: 'flex-end',
    bottom: -160,
    alignSelf: 'center',
    fontSize: 16,
    alignItems: "flex-end"
    
  }
    
});
