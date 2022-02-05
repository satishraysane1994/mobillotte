import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Menu from "../components/Menu";

const Investment = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{ marginTop: 50, flexDirection: "row", alignItems: "center" }}
      >
        <Text
          style={{
            marginTop: -10,
            fontWeight: "bold",
            fontSize: 25,
            marginLeft: 20,
          }}
        >
          Investments
        </Text>
        <Feather
          name="bell"
          size={30}
          color="#959595"
          style={{ marginLeft: 30 }}
        />
        <Feather
          name="grid"
          size={30}
          color="#959595"
          style={{ marginLeft: 30 }}
        />
        <Menu />
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#74DDCF",
              marginLeft: 20,
              marginTop: 20,
              alignItems: "center",
              borderRadius: 20,
              height: 280,
              width: 160,
            }}
          >
            <View
              style={{
                backgroundColor: "#3DC5B1",
                marginTop: 20,
                borderRadius: 50,
                padding: 20,
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/car.png")}
              />
            </View>

            <Text style={{ fontWeight: "bold", marginTop: 20 }}>
              Car Insurance
            </Text>
            <Text style={{ marginTop: 5 }}>Today 20% off</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 5,
                marginTop: 50,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  color: "#565656",
                  fontWeight: "bold",
                  fontSize: 10,
                }}
              >
                BUY NOW
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <View
              style={{
                backgroundColor: "#F5F5F5",
                marginLeft: 20,
                marginTop: 20,
                alignItems: "center",
                borderRadius: 20,
                height: 130,
                width: 160,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D9DBDB",
                  marginTop: 20,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <FontAwesome5 name="hands" size={24} color="#35C1C5" />
              </View>
              <Text style={{ fontWeight: "bold", marginTop: 15, fontSize: 15 }}>
                Life Insurance
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#F5F5F5",
                marginLeft: 20,
                marginTop: 15,
                alignItems: "center",
                borderRadius: 20,
                height: 130,
                width: 160,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D9DBDB",
                  marginTop: 20,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <MaterialIcons name="clean-hands" size={24} color="#35C1C5" />
              </View>
              <Text style={{ fontWeight: "bold", marginTop: 15, fontSize: 15 }}>
                Life Insurance
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          My Investment
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 140,
              color: "#9AD8CB",
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",

            borderRadius: 15,
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,

            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              marginLeft: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#D9DBDB",
                marginTop: 20,
                borderRadius: 50,
                padding: 20,
                marginRight: 100,
              }}
            >
              <MaterialIcons name="clean-hands" size={24} color="#35C1C5" />
            </View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Life Insurance</Text>
            <Text style={{ fontSize: 15, color: "#C5C4C2", marginBottom: 20 }}>
              Unit 4 unit / USD 3000
            </Text>
          </View>

          <View style={{ marginLeft: 35 }}>
            <Text style={{ color: "#C5C4C2", marginTop: 20 }}>
              Date: 24-April-2021
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 50, marginLeft: 30 }}>
              Rs. 1199 / mo.
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",

            borderRadius: 15,
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,

            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              marginLeft: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#D9DBDB",
                marginTop: 20,
                borderRadius: 50,
                padding: 20,
                marginRight: 100,
              }}
            >
              <MaterialIcons name="clean-hands" size={24} color="#35C1C5" />
            </View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Life Insurance</Text>
            <Text style={{ fontSize: 15, color: "#C5C4C2", marginBottom: 20 }}>
              Unit 4 unit / USD 3000
            </Text>
          </View>

          <View style={{ marginLeft: 35 }}>
            <Text style={{ color: "#C5C4C2", marginTop: 20 }}>
              Date: 24-April-2021
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 50, marginLeft: 30 }}>
              Rs. 1199 / mo.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});
export default Investment;
