import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

interface TabIconProps {
  focused: boolean;
  icon: any;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const focusedIconColor = isDark ? "#151312" : "#ffffff";
  const focusedTextColor = isDark ? "text-secondary" : "text-white";
  const unfocusedIconColor = isDark ? "#A8B5DB" : "#71717A";

  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 
                mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor={focusedIconColor} className="size-5" />
        <Text className={`${focusedTextColor} text-base font-semibold ml-2`}>
          {title}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor={unfocusedIconColor} className="size-5" />
    </View>
  );
};

const _layout = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  // 🔑 Define Theme-Based Colors for the BAR STYLE
  const barBgColor = isDark ? "#0f0d23" : "#ffffff";
  const barBorderColor = isDark ? "#0f0d23" : "#e0e0e0";
  const activeColor = isDark ? "#AB8BFF" : "#4f46e5";
  const inactiveColor = isDark ? "#A8B5DB" : "#71717A";
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor, // Use dynamic color
        tabBarInactiveTintColor: inactiveColor, // Use dynamic color
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: barBgColor,
          borderColor: barBorderColor,
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
