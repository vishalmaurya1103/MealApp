import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
  
function CategoriseScreen({navigation}) {
    function renderCategoryItem(Dataitem) {
        function pressHandler() {
            navigation.navigate('MealsOverview',{
                categoryId : Dataitem.item.id,
            })
        }
        return (
          <CategoryGridTile
            title={Dataitem.item.title}
            color={Dataitem.item.color}
            onPress={pressHandler}
          />
        );
      }
       
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriseScreen;
