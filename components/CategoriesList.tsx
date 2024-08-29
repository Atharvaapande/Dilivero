import { ScrollView } from "react-native";
import Categories from "./Categories";

export default function CategoriesList() {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2 ml-3 mt-3"
      >
        <Categories
          isCategori={true}
          title="Pizza"
          url="https://links.papareact.com/gn7"
        />
        <Categories
          isCategori={true}
          title="Dosa"
          url="https://links.papareact.com/gn7"
        />
        <Categories
          isCategori={true}
          title="Pani Puri"
          url="https://links.papareact.com/gn7"
        />
        <Categories
          isCategori={true}
          title="Puran Poli"
          url="https://links.papareact.com/gn7"
        />
      </ScrollView>
    </>
  );
}
