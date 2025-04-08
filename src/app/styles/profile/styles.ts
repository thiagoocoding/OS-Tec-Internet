import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  header: { backgroundColor: '#00b046', padding: 12, alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },

  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 6,
    elevation: 2,
  },
  rowSpaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  os: { color: 'red', fontWeight: 'bold' },
  id: { fontWeight: 'bold' },
  info: { fontSize: 14 },
  label: { fontWeight: 'bold' },
  date: { color: '#0047ab' },

  loginSection: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  loginTitle: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginItem: {
    marginTop: 8,
    paddingHorizontal: 10,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  loginButtons: {
    flexDirection: 'row',
    marginTop: 6,
    gap: 8,
  },
  buttonGray: {
    backgroundColor: '#e0e0e0',
    padding: 6,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
  },

  atendimentoTipo: {
    marginTop: 12,
    backgroundColor: '#f7931e',
    padding: 10,
    alignItems: 'center',
  },
  atendimentoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },

  tituloSection: {
    marginTop: 10,
    backgroundColor: '#0000ff',
    padding: 10,
    alignItems: 'center',
  },
  tituloTexto: {
    color: '#fff',
    textTransform: 'lowercase',
  },

  historico: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },

  botaoVerTrajeto: {
    backgroundColor: '#0000ff',
    margin: 10,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  verTrajetoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },

  
});
// Define a interface dos atendimentos retornados pela API
export interface Atendimento {
  numero_os: string;
  dt_agendamento: string;
  dt_fechamento?: string;
  descricao: string;
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
  celular: string;
  telefone: string;
  id: number;
  desc_funcionario?: string;
}
