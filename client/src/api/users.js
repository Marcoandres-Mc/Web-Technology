import axios from 'axios';
import {API} from './urlAPI';

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API}/api/cuentas/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const getUser = async (id) => {
    try {
        const response = await axios.get(`${API}/api/cuentas/usuarios/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
}

export const registerUser = async (user) => { 
  try {
      const response = await axios.post(`${API}/api/cuentas/usuarios`,user);
      return response.data;
    } catch (error) {
      console.error('Error registering pelicula:', error);
      return null;
    }

};

export const deleteUser = (id) => {
    return axios.delete(`${API}/api/cuentas/usuarios/${id}`);
}

export const updateUser = async (user,id) => {
  try {
    const response = await axios.put(`${API}/api/cuentas/usuarios/${id}`, user);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    return null;
  }
}

export const loginUser = async (user) => {
    try {
        const response = await axios.post(`${API}/api/cuentas/login`, user);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
}


