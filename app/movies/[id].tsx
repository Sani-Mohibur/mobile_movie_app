import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useSingleFetch from "@/services/useSingleFetch";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value: string | number | null | undefined;
  textClass: string;
}

const MovieInfo = ({ label, value, textClass }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className={`${textClass} opacity-70 font-normal text-sm`}>
      {label}
    </Text>
    <Text className={`${textClass} font-bold text-sm mt-2`}>
      {value || "N/A"}
    </Text>
  </View>
);
const MovieDetails = () => {
  const { colorScheme } = useColorScheme();

  //Define theme classes
  const isDark = colorScheme === "dark";
  const bgClass = isDark ? "bg-primary" : "bg-light-mode-bg";
  const textClass = isDark ? "text-light-100" : "text-dark-mode-text";
  const boxBgClass = isDark ? "bg-dark-100" : "bg-light-mode-card";
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: movie, loading } = useSingleFetch(() =>
    fetchMovieDetails(id as string)
  );
  return (
    <View className={`${bgClass} flex-1`}>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />

          {/* <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-white flex items-center justify-center">
            <Image
              source={icons.play}
              className="w-6 h-7 ml-1"
              resizeMode="stretch"
            />
          </TouchableOpacity> */}
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className={`${textClass} font-bold text-xl`}>
            {movie?.title}
          </Text>
          <View className="flex-col items-start gap-y-1 mt-2">
            <Text className={`${textClass} opacity-70 text-sm`}>
              {movie?.release_date}
            </Text>
            <Text className={`${textClass} opacity-70 text-sm`}>
              {movie?.runtime} min
            </Text>
          </View>

          <View
            className={`flex-row tems-center ${boxBgClass} px-2 py-1 rounded-md gap-x-1 mt-2`}
          >
            <Image source={icons.star} className="size-4" />
            <Text className={`${textClass} font-bold text-sm`}>
              {Math.round(movie?.vote_average ?? 0)} / 10
            </Text>
            <Text className={`${textClass} opacity-70 text-sm`}>
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo
            label="Overview"
            value={movie?.overview}
            textClass={textClass}
          />
          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(" - ") || "N/A"}
            textClass={textClass}
          />
          <View>
            <MovieInfo
              label="Budget"
              value={
                movie?.budget && movie.budget > 0
                  ? `$${(movie.budget / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })} million`
                  : "N/A"
              }
              textClass={textClass}
            />
            <MovieInfo
              label="Revenue"
              value={
                movie?.revenue && movie.revenue > 0
                  ? `$${(movie.revenue / 1000000).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })} million`
                  : "N/A"
              }
              textClass={textClass}
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join(" - ") ||
              "N/A"
            }
            textClass={textClass}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={() => router.back()}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MovieDetails;
