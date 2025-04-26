import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './../../../configs/FirebaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const router = useRouter();
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)/MyTrip');
    } catch (error) {
      console.log('Sign-in error:', error);
      alert(error.message);
      ;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={styles.placeholder.color}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={styles.placeholder.color}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#4a4e69" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/auth/sign-up')}>
        <Text style={styles.linkText}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2e9e4', padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#22223b', marginBottom: 40, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#c9ada7',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    color: '#22223b',
  },
  button: {
    backgroundColor: '#4a4e69',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  linkText: { color: '#9a8c98', textAlign: 'center', marginTop: 10 },
  placeholder: { color: '#9a8c98' },
  passwordContainer: { position: 'relative' },
  eyeIcon: { position: 'absolute', right: 15, top: 15 },
});
