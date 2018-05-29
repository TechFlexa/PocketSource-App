import { Actions } from 'react-native-router-flux';
import { AsyncStoreUtility } from './index';


const alreadyLogged = () => {
	AsyncStoreUtility.get('Auth', 'token')
		.then(token => {
			if (token != null) {
				console.log(token);
				loginSuccessful(token);
			}
		})
		.catch(error => console.log(error));
	return false;
};

const loginSuccessful = (token) => {
	AsyncStoreUtility.set('Auth', 'token', token)
		.then(() => {
			Actions.Home();
		})
		.catch(e => console.log(e));
};
const signout = () => {
	AsyncStoreUtility.remove('Auth', 'token')
		.then(() => {
			Actions.login();
		})
        .catch(e => console.log(e));
};
module.exports = {
	alreadyLogged,
	loginSuccessful,
	signout
};
