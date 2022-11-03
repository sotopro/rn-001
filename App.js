import {View, TextInput, Button } from 'react-native';
import { styles } from './styles';


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

