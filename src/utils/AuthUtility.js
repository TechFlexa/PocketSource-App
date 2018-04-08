import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStoreUtility } from './index';


const alreadyLogged = () => {
	AsyncStoreUtility.get('Auth', 'token')
		.then(token => {
			if(token != null) {
				loginSuccessful(token);
			}
		})
		.catch(error => console.log(error))
	return false;
}

const loginSuccessful = (token) => {
	AsyncStoreUtility.set('Auth','token',token)
		.then(() => {
			ToastAndroid.show('Logged in Successfully!', ToastAndroid.SHORT);
			Actions.Home();
		})
		.catch(e => console.log(e));
}

module.exports = {
	alreadyLogged,
	loginSuccessful
}