import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Color from "../../Shared/Color";

export default function CategorySlider({ selectedCategory }) {
  const [active, setActive] = useState(1);

  const categoryList = [
    { id: 1, name: "Latest" },
    { id: 2, name: "World" },
    { id: 3, name: "Business" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Life" },
    { id: 6, name: "Movie" },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {  selectedCategory(item.name);
              onCategoryClick(item.id);
            
            }}
          >
            <Text
              style={
                item.id == active ? styles.selectText : styles.unselectText
              }
            >
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  unselectText: {
    marginRight: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: Color.gray,
  },
  selectText: {
    marginRight: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: Color.primary,
  },
});
