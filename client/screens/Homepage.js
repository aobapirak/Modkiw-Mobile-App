import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { restaurants } from "../dummydata";

const Homepage = ({ navigation }) => {

  return (
    <ScrollView>
    <View style={styles.homepageView}>
      <View style={styles.rectangleView} />
      <Text style={styles.helloAreYouHungryYet}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.areYouHungry}> Are you hungry yet?</Text>
      </Text>
      <View style={styles.searchView}>
        <View style={styles.searchBox} />
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <TextInput style={styles.searchByRestaurant}>Search by restaurant</TextInput>
      </View>
      <View style={styles.allBox}>
        <View style={styles.allType} />
        <Text style={styles.allText}>All</Text>
      </View>
      <View style={styles.aLaCarteBox}>
        <View style={styles.aLaCarteType} />
        <Text style={styles.aLaCarte}>A la carte</Text>
      </View>
      <View style={styles.noodlesBox}>
        <View style={styles.noodleType} />
        <Text style={styles.noodlesText}>Noodles</Text>
      </View>
      <View style={styles.fastFoodBox}>
        <View style={styles.fastFoodType} />
        <Text style={styles.fastFoodText}>Fast food</Text>
      </View>

      <View style={styles.restaurantChoice}>
      {restaurants.map((restaurant) => 
      <View>
          <View style={styles.restaurantView}> 
          <TouchableOpacity activeOpacity = { .5 } onPress = { () => {navigation.navigate("Restaurant",{restaurant: "testest"})}}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={restaurant.image}
          />
          <View style={styles.whitebox} />
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantType}>{restaurant.type}</Text>
          </TouchableOpacity>
          </View>
      </View>)}
      </View>
      

      <View style={styles.barView}>
        <Image
          style={styles.barBox}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.billIcon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={styles.signoutIcon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={require("../assets/home-2-1.png")}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
  },
  helloText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  areYouHungry: {
    margin: 0,
  },
  helloAreYouHungryYet: {
    position: "absolute",
    top: 74,
    left: 38,
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#1b1a17",
    textAlign: "left",
    width: 325,
  },
  searchBox: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#efefef",
    width: 335,
    height: 33,
  },
  searchIcon: {
    position: "absolute",
    top: 9,
    left: 12,
    width: 15,
    height: 15,
  },
  searchByRestaurant: {
    position: "absolute",
    top: 3,
    left: 40,
    fontSize: 16,
    fontFamily: "SF Pro Rounded",
    color: "#505050",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 172,
    left: 38,
    width: 335,
    height: 33,
  },
  allType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#f0a500",
    width: 35,
    height: 22,
  },
  allText: {
    position: "absolute",
    top: 1,
    left: 9,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 16,
    height: 17.81,
  },
  allBox: {
    position: "absolute",
    top: 216,
    left: 38,
    width: 35,
    height: 22,
  },
  aLaCarteType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 79,
    height: 22,
  },
  aLaCarte: {
    position: "absolute",
    top: 1,
    left: 9,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 90,
    height: 17.81,
  },
  aLaCarteBox: {
    position: "absolute",
    top: 216,
    left: 83,
    width: 35,
    height: 22,
  },
  noodleType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 67,
    height: 22,
  },
  noodlesText: {
    position: "absolute",
    top: 1,
    left: 8,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 52.57,
    height: 17.81,
  },
  noodlesBox: {
    position: "absolute",
    top: 216,
    left: 167,
    width: 67,
    height: 22,
    marginLeft: 5
  },
  fastFoodType: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#d8d8d8",
    width: 71,
    height: 22,
  },
  fastFoodText: {
    position: "absolute",
    top: 1,
    left: 7,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    textAlign: "left",
    width: 70,
    height: 18,
  },
  fastFoodBox: {
    position: "absolute",
    top: 216,
    left: 244,
    width: 71,
    height: 22,
    marginLeft: 5
  },
  imageStyle: {
    top: 0,
    left: 0,
    borderRadius: 20,
    width: 285,
    height: 170,
  },
  whitebox: {
    position: "absolute",
    top: 116,
    left: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    width: 285,
    height: 54,
  },
  restaurantName: {
    position: "absolute",
    top: 127,
    left: 23,
    fontSize: 15,
    fontFamily: "SF Pro Rounded",
    color: "#000",
    textAlign: "left",
  },
  restaurantType: {
    position: "absolute",
    top: 145,
    left: 23,
    fontSize: 12,
    fontFamily: "SF Pro Rounded",
    color: "#777",
    textAlign: "left"
  },
  restaurantView: {
    top: 269,
    left: 47,
    width: 285,
    height: 170,
    marginBottom: 20
  },
  barBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  billIcon: {
    position: "absolute",
    top: 17,
    left: 199,
    width: 25,
    height: 25,
  },
  signoutIcon: {
    position: "absolute",
    top: 17,
    left: 324,
    width: 25,
    height: 25,
  },
  homeIcon: {
    position: "absolute",
    top: 17,
    left: 74,
    width: 25,
    height: 25,
  },
  barView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 411,
    height: 60,
  },
  homepageView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff9ee",
  },
  restaurantChoice: {
    marginBottom: 330
  },
});

export default Homepage;
