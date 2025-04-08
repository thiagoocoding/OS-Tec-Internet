import { StyleSheet } from 'react-native';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
  
container: {
        flex: 3,
        padding: 18,
        backgroundColor: colors.blue,

    },

nomeFuncinario:{
    fontSize: 10,
    marginBottom: 20,
    color: colors.black,
    backgroundColor: '#fff',
    alignItems: "center",
    padding: 40,
  },

  topSection: {
    alignItems: 'center',
    paddingTop: 10, // aumenta o espaço superior
    paddingBottom: 50,
  },
  
  tecnicoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0 // também joga o nome do técnico pra cima
  },

  tecnicoText1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 0,
    padding: 0 // também joga o nome do técnico pra cima
  },
  
  whiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    marginTop: -40,
  },
  
  atendimentosTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0b005c',
    textAlign: 'center',
    marginBottom: 14,
  },
  
  thiagocoding: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
  },


  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 14,
    paddingRight: 14,
  },
  logotext: {
    fontSize: 20,
    marginBottom: 2,
    padding: 8,
    color: colors.white,
    
  // joga a logo um pouco mais pra cima
  },
  funcao: {
    color: '#fff',
    fontSize: 0,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#130B5E',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderLeftWidth: 6,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDescricao: {
    marginVertical: 4,
  },
  cardNome: {
    fontWeight: 'bold',
  },
  cardContato: {
    marginTop: 6,
  },
  
});

export default styles;

  
