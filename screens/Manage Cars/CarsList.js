import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Content,
  List,
  ListItem,
  Thumbnail,
  Spinner,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function CarsList({ navigation }) {
  const [list, setList] = useState("");

  useEffect(() => {
    LoadCars();
  });

  function deleteCar(Elementid) {
    const id = Elementid;
    const options = {
      method: "DELETE",
    };
    fetch(
      `https://labmad-d856d-default-rtdb.firebaseio.com/Cars/${id}.json`,
      options
    )
      .then((response) => response.json())
      .then((result) => 0)
      .catch((error) => console.log("error", error));
  }

  function LoadCars() {
    fetch("https://labmad-d856d-default-rtdb.firebaseio.com/Cars.json")
      .then((response) => response.json())
      .then((result) => {
        setList(result);
      })
      .catch((error) => console.log("error", error));
  }
  if (list == "") {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner color="black"></Spinner>
      </Container>
    );
  } else if (list == null) {
    return (
      <Container>
        <Header style={{ height: 70 }}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Cars</Title>
          </Body>
          <Right>
            <Button
              iconRight
              info
              success
              onPress={() => navigation.navigate("Add Car")}
            >
              <Text style={{ color: "white" }}>Add Car</Text>
              <Icon>
                <Ionicons name="add-circle-outline" size={24} color="white" />
              </Icon>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={{ textAlign: "center" }}>No Cars Available</Text>
        </Content>
      </Container>
    );
  } else {
    return (
      <Container>
        <Header style={{ height: 70 }}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Cars</Title>
          </Body>
          <Right>
            <Button
              iconRight
              bordered
              light
              onPress={() => navigation.navigate("Add Car")}
            >
              <Text>Add Car</Text>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {Object.entries(list).map((arr) => (
              <TouchableOpacity activeOpacity={0} key={arr[0]}>
                <ListItem
                  onPress={() => {
                    global.id = arr[0];
                    navigation.navigate("Car Details");
                  }}
                >
                  <Left style={{ maxWidth: 70 }}>
                    <Thumbnail circle source={{ uri: arr[1].photoUrl }} />
                  </Left>
                  <Body>
                    <Text style={{ fontWeight: "bold" }}>{arr[1].model}</Text>
                    <Text note>{arr[1].make}</Text>
                  </Body>
                  <Right style={{ width: 500 }}>
                    <Button
                      style={{ paddingHorizontal: 10 }}
                      danger
                      onPress={() => {
                        Alert.alert(
                          "Delete",
                          "Are You Sure You Want To Delete Car",
                          [
                            { text: "NO", onPress: () => 0, style: "cancel" },
                            {
                              text: "YES",
                              onPress: () => {
                                deleteCar(arr[0]);
                              },
                            },
                          ]
                        );
                      }}
                    >
                      <AntDesign name="delete" size={24} color="white" />
                    </Button>
                  </Right>
                </ListItem>
              </TouchableOpacity>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
