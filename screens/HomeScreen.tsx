import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import CategoriesList from "../components/CategoriesList";
import MainList from "../components/MainList";

const offerArray = [
  {
    id: "10",
    isCategori: false,
    title: "Nando's",
    url: "https://links.papareact.com/gn7",
    rating: "3",
    offers: "offer",
    address: "link ",
  },
  {
    id: "2",
    isCategori: false,
    title: "Yo! Sushi",
    url: "https://links.papareact.com/gn7",
    rating: "4.5",
    offers: "Sushi",
    address: "London",
  },
  {
    id: "3",
    isCategori: false,
    title: "Paji Da Dhaba",
    url: "https://links.papareact.com/gn7",
    rating: "4.0",
    offers: "pizza",
    address: "MIDC road",
  },
];

const featureArray = [
  {
    id: "1",
    isCategori: false,
    title: "KFC",
    url: "https://links.papareact.com/gn7",
    rating: "4.2",
    offers: "offer",
    address: "dc square",
  },
  {
    id: "2",
    isCategori: false,
    title: "Yagi Mama",
    url: "https://links.papareact.com/gn7",
    rating: "4.4",
    offers: "Biryani",
    address: "New York",
  },
  {
    id: "3",
    isCategori: false,
    title: "Pizza Hut",
    url: "https://links.papareact.com/gn7",
    rating: "3.8",
    offers: "Peparoin Pizza",
    address: "MIDC",
  },
];

const discountArray = [
  {
    id: "1",
    isCategori: false,
    title: "100% off",
    url: "https://links.papareact.com/gn7",
    rating: "3.8",
    offers: "offer",
    address: "link square",
  },
  {
    id: "2",
    isCategori: false,
    title: "50% off",
    url: "https://links.papareact.com/gn7",
    rating: "4.8",
    offers: "Sushi",
    address: "boston",
  },
  {
    id: "3",
    isCategori: false,
    title: "Buy 1 Get 1 Free",
    url: "https://links.papareact.com/gn7",
    rating: "4.0",
    offers: "pizza",
    address: "mira road",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white z-10" style={style.boxShadow}>
        <View className="flex-row justify-between mx-4 my-2 items-center space-x-2">
          <TouchableOpacity>
            <Image
              className="h-7 w-7 rounded-full bg-gray-300 p-4"
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver to -
            </Text>
            <View className="flex-row items-center space-x-2">
              <Text className="text-xl font-bold ">Current Location</Text>
              <TouchableOpacity>
                <ChevronDownIcon size={20} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <UserIcon size={30} color="blue" />
          </TouchableOpacity>
        </View>

        <View className="my-2 mx-4 flex-row justify-between items-center">
          <View className="flex-row space-x-2 items-center bg-gray-300 flex-1 py-2 px-3 rounded-md">
            <MagnifyingGlassIcon size={20} color="blue" />
            <TextInput
              className="flex-1"
              keyboardType="default"
              placeholder="Resturant near you"
            ></TextInput>
          </View>
          <TouchableOpacity>
            <AdjustmentsVerticalIcon size={30} color="blue" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="z-0">
        <CategoriesList />

        {/* Offers */}
        <MainList
          title="Offers near you!"
          description="Why not support your local resturant tonight?"
          jsonData={offerArray}
        />

        {/* Features */}
        <MainList
          title="Featured"
          description="Paid placement from our partners"
          jsonData={featureArray}
        />

        {/* asdasd */}
        <MainList
          title="Tasty Discounts"
          description="The best description ever"
          jsonData={discountArray}
        />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 7,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 10,
  },
});
