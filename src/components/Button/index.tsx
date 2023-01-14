import { Container, Text } from "./styles";

type Props = {
  description: string
}

export function Button({ description }: Props) {
  return (
    <Container>
      <Text>{description}</Text>
    </Container>
  )
}