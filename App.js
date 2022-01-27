import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>{isEnabled.toString()}</Text>
      <Switch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        trackColor={{ false: "#ff0000", true: "#0000ff" }}
        thumbColor={isEnabled ? "#00ff00" : "#0000ff"}
        ios_backgroundColor="#ff0000"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
