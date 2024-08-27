import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import {UserIcon,MagnifyingGlassIcon,AdjustmentsVerticalIcon} from "react-native-heroicons/outline"

export default function HomeScreen(){
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
           headerShown:false, 
        });
    },[])

    return (
            <View className="flex-1">
                <View className="flex-row justify-between mx-4 my-2 items-center space-x-2">
                    <Image className="h-7 w-7 rounded-full bg-gray-300 p-4" source={{
                        uri:"https://links.papareact.com/wru",
                    }}/>
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver to -</Text>
                        <Text className="text-xl font-bold">Current Location</Text>
                    </View>
                    <UserIcon size={30} color='blue'/>
                </View>

                <View className="my-2 mx-4 flex-row justify-between items-center">
                    <View className="flex-row space-x-2 items-center bg-gray-300 flex-1 py-2 px-3 rounded-md">
                        <MagnifyingGlassIcon size={20} color='blue'/>
                        <TextInput className="flex-1" keyboardType="default" placeholder="Resturant near you"></TextInput>
                    </View>
                    <AdjustmentsVerticalIcon size={30} color='blue'/>
                </View>
                
                <ScrollView className="mb-4">
                    <ScrollView horizontal={true} className="space-x-2 ml-4">
                        <View className="h-28 w-32 bg-gray-300 rounded-md"></View>
                        <View className="h-28 w-32 bg-gray-300 rounded-md"></View>
                        <View className="h-28 w-32 bg-gray-300 rounded-md"></View>
                        <View className="h-28 w-32 bg-gray-300 rounded-md"></View>
                    </ScrollView>

                    <View className="ml-4">
                        <View className="my-4">
                            <Text className="font-bold text-lg">Offers near you!</Text>
                            <Text className="text-xs text-gray-400 font-bold">Why not support your local resturant tonight?</Text>
                        </View>
                        <ScrollView horizontal={true} className="space-x-2">
                            <View className="h-44 w-56 bg-gray-300 rounded-md"></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"></View>
                        </ScrollView>
                    </View>

                    <View className="ml-4">
                        <View className="my-4">
                            <Text className="font-bold text-lg">Featured</Text>
                            <Text className="text-xs text-gray-400 font-bold">Paid placement from our partners</Text>
                        </View>
                        <ScrollView horizontal={true} className="space-x-2">
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                        </ScrollView>
                    </View>

                    <View className="ml-4">
                        <View className="my-4">
                            <Text className="font-bold text-lg">Featured</Text>
                            <Text className="text-xs text-gray-400 font-bold">Paid placement from our partners</Text>
                        </View>
                        <ScrollView horizontal={true} className="space-x-2">
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                            <View className="h-44 w-56 bg-gray-300 rounded-md"><Image source={{uri:'https://links.papareact.com/gn7'}} className="h-44 w-56 rounded-md"/></View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
    )
}