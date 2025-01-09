import axios from 'axios';
import { API } from './urlAPI';

export const getProductsLaptos = async () => {
  try {
    const response = await axios.get(`${API}/products/laptos/api`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API}/product/${id}/api`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}


export const getProductsCelulares = async () => {
  try {
    const response = await axios.get(`${API}/products/celulares/api`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export const getProductsGaming = async () => {
  try {
    const response = await axios.get(`${API}/products/gaming/api`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export const getProductsComponentes = async () => {
  try {
    const response = await axios.get(`${API}/products/componentes/api`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}



