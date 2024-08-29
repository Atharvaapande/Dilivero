import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";

interface Props {
  url: string;
  title: string;
  isCategori: boolean;
  rating: string;
  offers: string;
  address: string;
}

export default function Categories({
  url,
  title,
  isCategori,
  rating,
  offers,
  address,
}: Props) {
  return (
    <>
      <TouchableOpacity
        className="mx-1 my-2 relative bg-white rounded-md"
        style={style.boxShadow}
      >
        {isCategori ? (
          <Image
            source={{
              uri: url,
            }}
            className="h-24 w-32 rounded-md"
          />
        ) : (
          <Image
            source={{
              uri: url,
            }}
            className="h-28 w-56 rounded-t-md"
          />
        )}
        {isCategori && (
          <View className="h-24 w-32 absolute rounded-md bg-gray-900 opacity-10"></View>
        )}
        {isCategori ? (
          <Text className="absolute bottom-1 left-1 font-bold text-sm text-white">
            {title}
          </Text>
        ) : (
          <View className="p-2">
            <Text className="font-bold text-lg mb-1">{title}</Text>
            <View className="flex-row space-x-2">
              <View className="space-y-1">
                <StarIcon size={15} color="green" />
                <MapPinIcon size={15} color="green" />
              </View>
              <View className="space-y-1">
                <View className="flex-row space-x-2">
                  <Text className="text-green-700 text-xs font-bold">
                    {rating}
                  </Text>
                  <Text className="text-gray-400 font-bold text-xs">
                    {offers}
                  </Text>
                </View>
                <Text className="text-gray-400 font-bold text-xs">
                  Nearby {address}
                </Text>
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
  },
});
