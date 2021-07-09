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
  List,
  ListItem,
  Separator,
} from "native-base";

export default function ManageCarBrands({ navigation }) {
  global.carBrands = [
    "Mercedes-Benz",
    "Toyota",
    "Volkswagen",
    "BMW",
    "Honda",
    "Ford",
    "Porsche",
    "Nissan",
  ];
  return (
    <Container>
      <Header style={{ height: 70 }}>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Car Brands</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content>
        <Separator bordered>
          <Text>Car Brands</Text>
        </Separator>
        <List>
          {global.carBrands.map((Brand, i) => (
            <ListItem key={i}>
              <Text>{Brand}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}
