import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = {

  container: {
    backgroundColor: '#3C3C3C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  bg: {
    width: window.width,
    height: (window.height / 2) + 20,
    backgroundColor: '#E8FF00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 50
  },

  logo: {
    width: window.width - 30,
    resizeMode: 'contain',
    flex: 1,
    paddingTop: 20
  },

  button: {
    width: window.width - 200,
    height: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: '#E8FF00',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#3C3C3C',
    fontSize: 18,
    fontWeight: '500',
  }
};

export default styles;
