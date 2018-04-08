import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStoreUtility } from './index';


const alreadyLogged = () => {
	let token = AsyncStoreUtility.getToken();
	if(token) {
		loginSuccessful();
	}
	return false;
}

const loginSuccessful = (token) => {
	ToastAndroid.show('Logged in Successfully!', ToastAndroid.SHORT);
	Actions.Home();
	AsyncStoreUtility.setToken(token);
}

module.exports = {
	alreadyLogged,
	loginSuccessful
}