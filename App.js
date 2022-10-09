import { StyleSheet, SafeAreaView } from 'react-native';
import LoginVista from './src/vistas/LoginVista';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <LoginVista />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  }
});
