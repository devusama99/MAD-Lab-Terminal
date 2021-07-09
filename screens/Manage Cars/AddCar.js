import React from "react";
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
  Form,
  Item,
  Input,
  Label,
} from "native-base";

import { Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function AddCar({ navigation }) {
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [power, setPower] = useState();
  const [color, setColor] = useState();
  const [photoUrl, setPhotoUrl] = useState();

  function addCar() {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
        make: make,
        model: model,
        year: year,
        power: power,
        color: color,
        photoUrl: photoUrl,
      }),
    };

    fetch(
      "https://labmad-d856d-default-rtdb.firebaseio.com/Cars.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        navigation.goBack();
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <Container>
      <Header style={{ height: 70 }}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Add Car</Title>
        </Body>
      </Header>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Make</Label>
            <Input value={make} onChangeText={(text) => setMake(text)} />
          </Item>
          <Item stackedLabel>
            <Label>Model</Label>
            <Input value={model} onChangeText={(text) => setModel(text)} />
          </Item>
          <Item stackedLabel>
            <Label>Year</Label>
            <Input value={year} onChangeText={(text) => setYear(text)} />
          </Item>
          <Item stackedLabel>
            <Label>Power</Label>
            <Input value={power} onChangeText={(text) => setPower(text)} />
          </Item>
          <Item stackedLabel>
            <Label>Color</Label>
            <Input value={color} onChangeText={(text) => setColor(text)} />
          </Item>
          <Item stackedLabel>
            <Label>Photo URL</Label>
            <Input
              value={photoUrl}
              onChangeText={(text) => setPhotoUrl(text)}
            />
          </Item>
          <Button
            style={{
              alignSelf: "center",
              marginTop: 30,
            }}
            iconRight
            primary
            onPress={() => addCar()}
          >
            <Text>Add Car</Text>
            <Icon>
              <AntDesign name="car" size={24} color="white" />
            </Icon>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
