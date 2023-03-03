import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 1,
    marginBottom: 20,
    backgroundColor: '#fcba03',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 50,
    backgroundColor: '#fcba03',
    flexDirection: 'row',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  dicepoints: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: 40
  },
  gameinfo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#fcba03",
    borderRadius: 15,
    justifyContent: 'center',
    marginHorizontal: 100
  },
  buttonText: {
    color: "black",
    fontSize: 20
  },
  textinput: {
    borderStyle: 'solid',
    borderWidth: 2,
    margin: 20,
    borderColor: "#fcba03",
    borderRadius: 8,
    justifyContent: 'center'
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  rules: {
    margin: 15,
    fontSize: 16
  },
  scoreboardText: {
    margin: 15,
    fontsize: 16,
    textAlign: 'center',
  },
});