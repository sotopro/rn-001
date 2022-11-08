import { useState } from 'react';
import {View, TextInput, Button, Text, FlatList } from 'react-native';
import { styles } from './styles';


export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task, background: getRandomBackgroundColor() }]);
    setTask('');
  }

  const getRandomBackgroundColor = () => {
    const colors = ['blue', 'red', '#212121'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const renderItem = ({item}) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItem}>{item.value}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={task} 
          placeholder="Enter Task"
          onChangeText={text => setTask(text)}
        />
        <Button disabled={!task} title='Add' color='#9A848F' onPress={onHandleTask} />
      </View>
      <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Todo List</Text>
      </View>
      <FlatList 
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

