import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Menu from "../components/Menu";

const Portfolio = () => {
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
            marginLeft: 30,
          }}
        >
          Portfolio
        </Text>
        <Feather
          name="bell"
          size={30}
          color="#959595"
          style={{ marginLeft: 60 }}
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
              marginTop: 20,
              borderRadius: 20,
              height: 160,
              width: "85%",
              marginHorizontal: 30,
            }}
          >
            <View style={{ flexDirection: "row", flex: 1, marginTop: 50 }}>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{ color: "white", fontSize: 15, marginBottom: 15 }}
                >
                  Available balance
                </Text>
                <Text
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  $ 490,227
                </Text>
              </View>

              <View
                style={{ flex: 1, alignItems: "flex-end", marginRight: 15 }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Profit</Text>
                <Text style={{ color: "white", fontSize: 15 }}>+2.3%</Text>
                <Text style={{ color: "white", fontSize: 15 }}>$11,275.22</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
          width: "85%",
          marginHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          My Assets
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#9AD8CB",
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F5F6FB",
          marginTop: 20,
          marginHorizontal: 30,
          borderRadius: 10,
        }}
      >
        <View>
          <Image
            style={{ height: 60, width: 60, margin: 10 }}
            source={require("../../assets/images/bitcoin.png")}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 15, marginRight: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Bitcoin</Text>
            <Text style={{ fontWeight: "bold" }}>3,260.48 BTC</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              Crpto asset
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              $4502000
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F5F6FB",
          marginTop: 15,
          marginHorizontal: 30,
          borderRadius: 10,
        }}
      >
        <View>
          <Image
            style={{ height: 60, width: 60, margin: 10 }}
            source={require("../../assets/images/gbp.png")}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 15, marginRight: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>GBP</Text>
            <Text style={{ fontWeight: "bold" }}>3,260.48 BTC</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              Crpto asset
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              $4502000
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
          width: "85%",
          marginHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Last Transactions
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#9AD8CB",
            }}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          marginTop: 15,
          marginHorizontal: 30,
          borderRadius: 10,
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
        }}
      >
        <View>
          <Image
            style={{ height: 60, width: 60, margin: 10 }}
            source={require("../../assets/images/downarrow.png")}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 15, marginRight: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>$ 204</Text>
            <Text
              style={{ fontWeight: "bold", color: "#9AD8CB", fontSize: 10 }}
            >
              Deposited
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              0.8934 BTC
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              Aug 19,2021
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          marginTop: 15,
          marginHorizontal: 30,
          borderRadius: 10,
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
        }}
      >
        <View>
          <Image
            style={{ height: 60, width: 60, margin: 10 }}
            source={require("../../assets/images/uparrow.png")}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 15, marginRight: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>$ 204</Text>
            <Text
              style={{ fontWeight: "bold", color: "#9AD8CB", fontSize: 10 }}
            >
              Deposited
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              0.8934 BTC
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 10, color: "#B7B8BD" }}
            >
              Aug 19,2021
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

export default Portfolio;
