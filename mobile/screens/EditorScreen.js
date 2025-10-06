import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function CodeEditorScreen() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const response = await axios.post('http://localhost:3000/run', {
        language: 'python',
        code,
      });
      setOutput(response.data);
    } catch (error) {
      setOutput('Error executing code');
    }
  };

  return (
    <View>
      <TextInput
        multiline
        value={code}
        onChangeText={setCode}
        placeholder="Write your code here"
      />
      <Button title="Run Code" onPress={runCode} />
      <Text>{output}</Text>
    </View>
  );
}
