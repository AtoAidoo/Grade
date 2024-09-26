import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ placeholder, label, value, handleTextChange, }:{
    placeholder: string; label: string; value: any; handleTextChange: any;
}) => {
  const textColor = useThemeColor({}, "text");
  const tintColor = useThemeColor({}, "tint");
  
  return (
    <View style={styles.container}>
      <View style={styles.Field}>
        <TextInput
          style={[{ flex: 1, color: "#fff" }]}
          placeholderTextColor={"#ffffffd5"}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
        />
        <MaterialIcons style={{paddingLeft: 10}} name={'search'} size={20} color="#fff" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  Field: {
    width: "100%",
    height: 50,
    backgroundColor: "gray",
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

});
