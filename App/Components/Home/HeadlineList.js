import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

export default function HeadlineList({ newsList }) {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          marginTop: 5,
          fontWeight: "bold",
          fontSize: 20,
          color: Color.primary,
        }}
      >
        World News
      </Text>

      <FlatList
        data={newsList}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                backgroundColor: Color.lightGray,
                height: 1,
                marginTop: 10,
              }}
            ></View>
            <Pressable
              onPress={() => navigation.navigate("readnews", { news: item })}
              style={{ marginTop: 15, flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 15,
                }}
              />
              <View style={{ marginRight: 130, marginLeft: 10 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Color.primary, paddingTop: 5 }}>
                  {item.source.name}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
