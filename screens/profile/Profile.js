import { StyleSheet, Text, View, Button } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>
        Profile
      </Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
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
    color: 'black',
  },
});