import { AsyncStorage } from 'react-native';

const set = async (store,key,data) => {
	try {
	  await AsyncStorage.setItem(`@${store}:${key}`, `${data}`);
	  return true;
	} catch (error) {
	  return false;
	}
}

const get = async (store,key) => {
	try {
	  const value = await AsyncStorage.getItem(`@${store}:${key}`);
	  if (value !== null){
	    return value;
	  }
	  return false;
	} catch (error) {
	  return false;
	}
}

const remove = async (store,key) => {
	try {
	  await AsyncStorage.removeItem(`@${store}:${key}`);
	  return true;
	} catch (error) {
	  return false;
	}
}

const setToken = (token) => set('Auth','token',token);

const getToken = () => {
	return get('Auth','token')
};

const removeToken = () => remove('Auth','token');


module.exports = {
	set,
	get,
	remove,
	setToken,
	getToken,
	removeToken
};
