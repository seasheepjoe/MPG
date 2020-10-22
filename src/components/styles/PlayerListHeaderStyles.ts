import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    width: '20%',
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
