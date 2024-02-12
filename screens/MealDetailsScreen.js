import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useEffect, useContext } from "react";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../Store/context/favorite-context";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const favoriteMealCon = useContext(FavoriteContext);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealCon.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealCon.removeFavorite(mealId);
    } else {
      favoriteMealCon.addFavorite(mealId);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="#e4ba23"
            size={24}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#e4ba23",
  },
  detailsText: {
    color: "#e4ba23",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
