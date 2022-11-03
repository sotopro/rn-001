import {View, TextInput, Button, Text } from 'react-native';
import { styles } from './styles';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Button  title='Add' color='#9A848F' onPress={() => null} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo Item</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo Item</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo Item</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo Item</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo Item</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.listItem}>Todo Item</Text>
        </View>
      </View>
    </View>
  );
}

