import api from './axios';


export const loginUser = async (login: string, senha: string) => {
  try {
    const response = await api.post('/auth', { login, senha });
    console.log(response);
    return response.data; // Retorna os dados da resposta, como token, userName, etc.
  } catch (error: any) {
    // Verifica se error.response existe e captura a mensagem corretamente
    const errorMessage =
      error.response?.data?.message || 'Falha na autenticação. Verifique suas credenciais.';
    throw new Error(errorMessage);
  }
};
