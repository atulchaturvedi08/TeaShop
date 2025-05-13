import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert("Profile Updated", `Name: ${formData.name}\nEmail: ${formData.email}`);
    // Add logic to update the profile
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(value) => handleChange("name", value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(value) => handleChange("email", value)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(value) => handleChange("password", value)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfile;