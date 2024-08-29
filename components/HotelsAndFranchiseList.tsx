import { ScrollView, View } from "react-native";
import Categories from "./Categories";

interface Props {
  categoriArray: {
    id: string;
    isCategori: boolean;
    title: string;
    url: string;
    rating: string;
    offers: string;
    address: string;
  }[];
}

export default function HotelsAndFranchiseList({ categoriArray }: Props) {
  return (
    <>
      <View className="ml-3">
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="space-x-2"
        >
          {categoriArray.map((cat) => (
            <Categories
              key={cat.id}
              isCategori={cat.isCategori}
              title={cat.title}
              url={cat.url}
              rating={cat.rating}
              offers={cat.offers}
              address={cat.address}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
