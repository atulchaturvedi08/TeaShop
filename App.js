import React from 'react';
import { View, Text, Button } from 'react-native';

// Temporary AuthProvider implementation
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = () => setUser({ id: 1, name: 'Test User' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create AuthContext
const AuthContext = React.createContext();

// Temporary AppNavigator implementation
const AppNavigator = () => {
  const { user, login, logout } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text>Welcome, {user.name}!</Text>
          <Button title="Logout" onPress={logout} />
          <View style={{ marginTop: 20 }}>
            <Text>App Content Would Go Here</Text>
          </View>
        </>
      ) : (
        <>
          <Text>Please login</Text>
          <Button title="Login" onPress={login} />
        </>
      )}
    </View>
  );
};

// Main App component
const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;