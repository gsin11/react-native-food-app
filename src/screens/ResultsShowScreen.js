import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import server from "../api/server";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResults = async (id) => {
    const response = await server.get(`/data.json?${id}`);
    setResult(response.data[0]); // just for mock purpose, expect server will revert back with single object
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => `${photo}-${Math.random() * 1}`}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
  },
});
