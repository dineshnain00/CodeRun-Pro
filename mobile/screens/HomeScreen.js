import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Welcome to CodeRun Pro</Text>
      <Button title="Start Coding" onPress={() => navigation.navigate("Editor")} />
    </View>
  );
}
