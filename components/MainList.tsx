import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import HotelsAndFranchiseList from "./HotelsAndFranchiseList";
import Categories from "./Categories";

interface Props {
  title: string;
  description: string;
  jsonData: {
    id: string;
    isCategori: boolean;
    title: string;
    url: string;
    rating: string;
    offers: string;
    address: string;
  }[];
}

export default function MainList({ title, description, jsonData }: Props) {
  return (
    <>
      <View className="flex-row items-center justify-between mx-4">
        <View className="my-2">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-xs text-gray-400 font-bold">{description}</Text>
        </View>
        <TouchableOpacity>
          <ArrowRightIcon size={20} color="blue" />
        </TouchableOpacity>
      </View>
      <HotelsAndFranchiseList categoriArray={jsonData} />
    </>
  );
}
