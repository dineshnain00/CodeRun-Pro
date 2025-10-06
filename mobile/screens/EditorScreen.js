import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import axios from "axios";

export default function EditorScreen() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    const res = await axios.post("http://localhost:5000/run", {
      code,
      language: "js",
    });
    setOutput(res.data.output || res.data.error);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          borderWidth: 1,
          height: 200,
          padding: 10,
          marginBottom: 10,
        }}
        multiline
        value={code}
        onChangeText={setCode}
        placeholder="Write code here..."
      />
      <Button title="Run Code" onPress={runCode} />
      <Text style={{ marginTop: 10 }}>Output: {output}</Text>
    </View>
  );
}
