import { Header } from "@components/Header";

import { Container } from "./styles";
import { Card } from "@components/Card";
import { Text } from "react-native";
import { Meals } from "@components/Meals";

export function Home() {
  return (
    <Container>
      <Header />
      <Card />
      <Meals />
    </Container>
  );
}