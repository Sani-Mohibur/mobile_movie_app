import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useColorScheme } from "nativewind";
import React from "react";
// 🔑 Import Linking and ScrollView
import {
  Image,
  Linking,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 🔑 Placeholder functions for settings/links
const handleViewTerms = () => {
  // Replace with actual navigation to Terms screen or modal
  alert("Viewing Terms & Conditions...");
};

const handleViewPrivacy = () => {
  // Replace with actual navigation to Privacy screen or modal
  alert("Viewing Privacy Policy...");
};

const openTmdbLink = () => {
  Linking.openURL("https://www.themoviedb.org/");
};

const openJSMasteryLink = () => {
  Linking.openURL("https://www.jsmastery.pro/");
};

// 🔑 Helper component for reusable settings links
interface SettingsItemProps {
  label: string;
  onPress: () => void;
  textClass: string;
  cardBgClass: string;
}

const SettingsItem = ({
  label,
  onPress,
  textClass,
  cardBgClass,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between w-full p-4 ${cardBgClass} rounded-lg shadow-md mb-4`}
      onPress={onPress}
    >
      <Text className={`${textClass} text-base`}>{label}</Text>
      {/* Optional: Add an arrow icon here if desired */}
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  // Conditional Class Definitions (based on your custom colors)
  const isDark = colorScheme === "dark";
  const bgClass = isDark ? "bg-primary" : "bg-light-mode-bg";
  const textClass = isDark ? "text-light-100" : "text-dark-mode-text";
  const cardBgClass = isDark ? "bg-dark-100" : "bg-light-mode-card";

  return (
    // We use a standard View with padding instead of SafeAreaView as requested
    <View className={`flex-1 ${bgClass} pt-12`}>
      {/* Background Image with z-index lowered */}
      <Image source={images.bg} className="absolute w-full z-[-1]" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-col items-center justify-center">
          {/* Logo alignment matches Home page ListHeaderComponent */}
          <Image source={icons.logo} className="w-12 h-10 mt-8 mb-5 mx-auto" />
          <Text className={`${textClass} text-2xl font-bold mb-8`}>
            Settings
          </Text>
        </View>

        {/* --- Theme Toggle Section --- */}
        <View
          className={`flex-row items-center justify-between w-full p-4 ${cardBgClass} rounded-lg shadow-md mb-4`}
        >
          <Text className={`${textClass} text-base font-semibold`}>
            Toggle Dark Mode
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleColorScheme}
            trackColor={{ false: "#767577", true: "#A8B8FF" }}
            thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        {/* --- App Functionality Settings --- */}
        <SettingsItem
          label="Clear App Data Cache"
          onPress={() => alert("Cache cleared successfully!")}
          textClass={textClass}
          cardBgClass={cardBgClass}
        />

        {/* --- Acknowledgments and Legal --- */}
        <View className="mt-8 w-full">
          {/* App Version Info */}
          <Text className={`${textClass} opacity-50 text-sm mb-4`}>
            App Version: 1.0.0
          </Text>

          {/* Acknowledgments Header */}
          <Text
            className={`${textClass} opacity-80 text-base font-semibold mb-3`}
          >
            Acknowledgments
          </Text>

          {/* TMDb Link */}
          <TouchableOpacity onPress={openTmdbLink} className="mb-2">
            <Text className={`${textClass} text-sm font-medium underline`}>
              Data provided by The Movie Database (TMDb)
            </Text>
          </TouchableOpacity>

          {/* JS Mastery Link */}
          <TouchableOpacity onPress={openJSMasteryLink} className="mb-4">
            <Text className={`${textClass} text-sm font-medium underline`}>
              Assets & Guidance from JavaScript Mastery
            </Text>
          </TouchableOpacity>

          {/* Legal Links (Using SettingsItem for consistency) */}
          <SettingsItem
            label="Terms & Conditions"
            onPress={handleViewTerms}
            textClass={textClass}
            cardBgClass={cardBgClass}
          />
          <SettingsItem
            label="Privacy Policy"
            onPress={handleViewPrivacy}
            textClass={textClass}
            cardBgClass={cardBgClass}
          />
        </View>
      </ScrollView>
    </View>
  );
}
