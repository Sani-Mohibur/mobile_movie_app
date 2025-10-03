import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
// 🔑 Import the theme hook and Text
import { useColorScheme } from "nativewind";
import { Image, ScrollView, Text, View } from "react-native";

export default function SavedScreen() {
  const { colorScheme } = useColorScheme();

  // Define theme classes (Must match the structure in your other files)
  const isDark = colorScheme === "dark";
  const bgClass = isDark ? "bg-primary" : "bg-light-mode-bg";
  const textClass = isDark ? "text-light-100" : "text-dark-mode-text";

  return (
    // 🔑 Use standard View with dynamic background and added top padding for status bar visibility
    <View className={`flex-1 ${bgClass}`}>
      {/* 🔑 Background Image with z-index lowered */}
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {/* 1. Logo */}
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {/* 2. Title */}
        <Text className={`${textClass} text-2xl font-bold text-center`}>
          Your Watchlist
        </Text>

        {/* 3. Placeholder Message */}
        <View className="flex-1 justify-center items-center">
          <Text className={`${textClass} opacity-50 text-base text-center`}>
            Movie saving feature is coming soon!{"\n"}
            Check back later to see your favorites.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
