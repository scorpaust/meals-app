import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';

import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}></Image>

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} 
      textStyle={styles.detailText} />

      <View style={styles.listOuterContainer}>

        <View style={styles.listContainer}>

            <Subtitle>Ingredients</Subtitle>

            <List data={selectedMeal.ingredients} />

            <Subtitle>Steps</Subtitle>

            <List data={selectedMeal.steps} />

        </View>

      </View>

    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },  
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        margin: 4,
        padding: 6
    }, 
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        textAlign: 'center'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },  
    listContainer: {
        width: '80%'
    }
});