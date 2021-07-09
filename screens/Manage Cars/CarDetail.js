import React from "react";
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
  Thumbnail,
  Spinner,
  Card,
  CardItem,
} from "native-base";

import { useEffect, useState } from "react";

export default function CarDetails({ navigation }) {
  const [detail, setDetail] = useState("");
  useEffect(() => {
    LoadDetail();
  }, []);

  function LoadDetail() {
    const id = global.id;
    fetch(`https://labmad-d856d-default-rtdb.firebaseio.com/Cars/${id}.json`)
      .then((response) => response.json())
      .then((result) => {
        setDetail(result);
        console.log(detail);
      })
      .catch((error) => console.log("error", error));
  }

  if (detail == "") {
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
  } else {
    return (
      <Container>
        <Header style={{ height: 70 }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Details</Title>
          </Body>
        </Header>
        <Content>
          {Object.entries(detail).map((arr) => {
            if (arr[0] !== "photoUrl") {
              return (
                <Card key={arr[0]}>
                  <CardItem header bordered>
                    <Text>{arr[0].toUpperCase()}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>{arr[1]}</Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            }
          })}
          <Card key="photo">
            <CardItem header bordered>
              <Text>Photo</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Thumbnail square large source={{ uri: detail.photoUrl }} />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
