import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import GlobalAPI from "../../Services/GlobalAPI";
import axios from "axios";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

function TopHeadlinelSlider({ newsList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
          onPress={() => navigation.navigate("readnews", { news: item })}
          style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                borderRadius: 10,
                height: Dimensions.get("screen").width * 0.77,
              }}
            />

            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ color: Color.primary, marginTop: 10 }}>
              {item?.source?.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default TopHeadlinelSlider;
