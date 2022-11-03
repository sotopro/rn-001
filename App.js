import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Button  title='Add' color='#9A848F' onPress={() => null} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4F5',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#9A848F',
  }
});
