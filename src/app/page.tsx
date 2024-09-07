"use client";
import { Container, Title, Rating, Textarea, Button, Text, Divider, Group, Pagination, Space } from "@mantine/core";

import Footer from "@components/Footer";

export default function Home() {
  

  return (
    <Container size="600px">
      
      <Title order={2} >
        Food Review 🍕
      </Title>
      <Space h="sm"/>

      <Title order={4}>Your rating</Title>
      <Rating defaultValue={0} size="lg" />
      <Space h="sm"/>

      <Textarea
        label= "Your review"
        placeholder="Do you enjoy eating?"
        autosize
        minRows={3}
      />
      <Space h="sm"/>

      <Button color="orange">
        Submit Review
      </Button>
      <Space h="sm"/>
      <Divider/>
      
      <Space h="sm"/>
      <Group gap="lg" justify="center">
      <Title order={4}>Elon Musk</Title>
      <Rating value={5} readOnly/>
      </Group>
      <Text ta = "center" > "Best pizza in this world. I give you X score." </Text>

      <Footer
        year={2024}
        name="Kachapat Punthong"
        id={660612137}
      />
    </Container>
  );
}
