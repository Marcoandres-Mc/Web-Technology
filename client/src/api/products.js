import axios from 'axios';

const API = "http://localhost:3500/api";

export const getProductsLaptos = async () => {
  try {
    const response = await axios.get(`${API}/products/laptos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API}/product/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}


export const getProductsCelulares = async () => {
  try {
    const response = await axios.get(`${API}/products/celulares`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export const getProductsGaming = async () => {
  try {
    const response = await axios.get(`${API}/products/gaming`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export const getProductsComponentes = async () => {
  try {
    const response = await axios.get(`${API}/products/componentes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}



