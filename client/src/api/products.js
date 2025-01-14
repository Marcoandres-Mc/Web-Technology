import axios from 'axios';
import { API } from './urlAPI';

export const getProductsLaptos = async () => {
  try {
    const response = await axios.get(`${API}/api/products/laptos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API}/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}


export const getProductsCelulares = async () => {
  try {
    const response = await axios.get(`${API}/api/products/celulares`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export const getProductsGaming = async () => {
  try {
    const response = await axios.get(`${API}/api/products/gaming`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export const getProductsComponentes = async () => {
  try {
    const response = await axios.get(`${API}/api/products/componentes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}



