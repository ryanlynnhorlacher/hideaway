import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>
        Home
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    color: 'blue',
  },
});