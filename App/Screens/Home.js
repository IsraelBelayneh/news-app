import { Dimensions, LogBox, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategorySlider from "../Components/Home/CategorySlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlinelSlider from "../Components/Home/TopHeadlinelSlider";
import HeadlineList from "../Components/Home/HeadlineList";
import axios from "axios";
import { ActivityIndicator } from "react-native";

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //getTopHeadline();
    getNewsByCategory("latest");
  }, []);

  const getNewsByCategory = async (category) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=" +
          category +
          "&apiKey=a9cb7cdc9ada48c0ab63d7f146702f19"
      );

      setNewsList(response.data.articles);
      //console.log(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.log;
    }
  };

  const getTopHeadline = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a9cb7cdc9ada48c0ab63d7f146702f19"
      );

      //const result = (await GlobalAPI.getTopHeadline).data;
      setNewsList(response.data.articles);
      /* console.log("==========================================================");
      console.log(response.data.articles); */
    } catch (error) {
      console.log("error retriving data");
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 24, fontWeight: "bold", color: Color.primary }}
        >
          Habesha News
        </Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <CategorySlider
        selectedCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator size={'large'} color={Color.primary} marginTop={Dimensions.get('screen').height*0.40}/>
      ) : (
        <ScrollView>
          <TopHeadlinelSlider newsList={newsList} />

          <HeadlineList newsList={newsList} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
