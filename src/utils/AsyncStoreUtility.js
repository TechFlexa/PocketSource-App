import { AsyncStorage } from 'react-native';

const set = async (store, key, data) => {
	try {
		await AsyncStorage.setItem(`@${store}:${key}`, `${data}`);
		return true;
	} catch (error) {
		return false;
	}
};

const get = async (store, key) => {
	let value;
	try {
		value = await AsyncStorage.getItem(`@${store}:${key}`);
		if (value !== null) {
			return value;
		}
	} catch (error) {
		return value;
	}
};

const remove = async (store, key) => {
	try {
		await AsyncStorage.removeItem(`@${store}:${key}`);
		return true;
	} catch (error) {
		return error;
	}
};

const setToken = async (token) => await set('Auth', 'token', token);

const getToken = async () => await get('Auth', 'token');

const removeToken = async () => await remove('Auth', 'token');


module.exports = {
	set,
	get,
	remove,
	setToken,
	getToken,
	removeToken
};
