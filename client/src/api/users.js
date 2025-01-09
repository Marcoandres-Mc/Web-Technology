import axios from 'axios';
import { API } from './urlAPI';

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API}/cuentas/usuarios/api/auth`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
};

export const registerUser = (user) => { 
    return axios.post(`${API}/cuentas/usuarios/api/auth`,user);
}

export const loginUser = (user) => {
    return axios.post(`${API}/login/api/auth`,user);
}

export const deleteUser = (id) => {
    return axios.delete(`${API}/cuentas/usuarios/${id}/api/auth`);
}
