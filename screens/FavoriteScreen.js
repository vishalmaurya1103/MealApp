import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
// import { useContext } from "react";
// import { FavoriteContext } from "../Store/context/favorite-context";

function FavoriteScreen() {
  const favoriteMealIds = useSelector(state => state.favoriteMeal.ids)
  // const favoriteMealCon = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealCon.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text} >You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e4ba23",
  },
});
