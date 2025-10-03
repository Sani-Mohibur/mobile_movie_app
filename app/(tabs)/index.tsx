import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();

  const isDark = colorScheme === "dark";
  const bgClass = isDark ? "bg-primary" : "bg-light-mode-bg";
  const textClass = isDark ? "text-white" : "text-dark-mode-text";

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    loadNextPage,
    canLoadMore,
  } = useFetch<Movie>();

  const ListHeader = (
    <>
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      {/*  <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            /> */}

      <Text className={`text-lg ${textClass} font-bold mt-5 mb-3`}>
        Latest Movies
      </Text>
    </>
  );

  const ListFooter = () => {
    return moviesLoading && canLoadMore ? (
      <ActivityIndicator size="large" color="#ffffff" className="my-6" />
    ) : null;
  };

  if (moviesError) {
    return (
      <View className={`flex-1 ${bgClass} justify-center items-center`}>
        <Text className={`${textClass}`}>Error: {moviesError?.message}</Text>
      </View>
    );
  }

  return (
    <View className={`flex-1 ${bgClass}`}>
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        //Styling
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
