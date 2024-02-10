import { View, Text, StyleSheet} from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e4ba23",
    fontWeight: "bold", 
    fontSize: 24,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e4ba23",
    borderBottomWidth: 2,
  },
});
