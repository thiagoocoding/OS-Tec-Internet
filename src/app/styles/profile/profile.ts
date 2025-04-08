// src/styles/Login.styles.ts (ou onde preferir organizar)
import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
  
  background: {
    flex: 1,
  },
  container: {
    flex: 3,
    padding: 18,
  },
  botaoatendimento: {
    fontSize: 20,
    marginBottom: 16,
    color: colors.black,
    backgroundColor: '#4CAF50',
    alignItems: "center",
    padding: 16,
  },
  botaoononucto:{
    fontSize: 20,
    marginBottom: 10,
    color: colors.black,
    backgroundColor: '#4CAF50',
    alignItems: "center",
    padding: 16,
  },

 textononucto:{
    fontSize: 14,
    
 
  },
  textatendimento:{
    fontSize: 20,
    
  },

  boletos:{
    fontSize: 20,
    marginBottom: 16,
    color: colors.black,
    backgroundColor: '#4CAF50',
    alignItems: "center",
    padding: 16,
    
  },

  textboletos:{
    fontSize: 30,
    
  },
});