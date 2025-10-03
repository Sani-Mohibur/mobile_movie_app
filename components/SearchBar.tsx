import { icons } from "@/constants/icons";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, TextInput, View } from "react-native";
interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const inputBgClass = isDark ? "bg-dark-200" : "bg-light-mode-card";
  const textColorClass = isDark ? "text-light-100" : "text-dark-mode-text";
  const placeholderColor = isDark ? "#A8B5DB" : "#71717A";
  const iconTintColor = isDark ? "#AB8BFF" : "#1f2937";

  return (
    <View
      className={`flex-row items-center ${inputBgClass} rounded-full px-5 py-4`}
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={iconTintColor}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className={`flex-1 ml-2 ${textColorClass}`}
      />
    </View>
  );
};

export default SearchBar;
