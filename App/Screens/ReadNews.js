import { Image, Pressable, Share, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../Shared/Color";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";

export default function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => shareNews()}>
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="black"
          />
        </Pressable>
      </View>

      <View style={{ marginTop: 10 }}>
        <Image
          source={{ uri: news.urlToImage }}
          style={{ width: "100%", height: 300, borderRadius: 15 }}
        />
        <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
          {news.title}
        </Text>
        <Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
          {news.source.name}
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: Color.gray,
            fontSize: 16,
            lineHeight: 30,
          }}
        >
          {news.description}
        </Text>
        <Pressable onPress={() => WebBrowser.openBrowserAsync(news.url)}>
          <Text
            style={{
              marginTop: 10,
              color: Color.primary,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Read More
          </Text>
        </Pressable>
      </View>

      <View style={{ height: 5 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
