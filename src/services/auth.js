import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'https://back-love-down-luan-vilela-luans-projects-340b3d71.vercel.app/';

export const isAuthenticated = async () => {
  try {
    const value = await getToken();
    return value !== null;
  } catch (e) {
    console.log('error');
  }
};

export const getToken = async () => {
  try {
    const item = await AsyncStorage.getItem(TOKEN_KEY);
    return JSON.parse(item);
  } catch (e) {
    console.log('error');
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.log('error');
  }

  //
};

export const setStore = async (value, key = TOKEN_KEY) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('error');
  }
};
export const logout = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    console.log('error');
  }
};
