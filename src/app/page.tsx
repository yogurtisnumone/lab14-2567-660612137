"use client";
import { Container, Title, Rating, Textarea, Button, Text, Divider, Group, Pagination, Space } from "@mantine/core";
import { useState } from "react";
import Footer from "@components/Footer";

export default function Home() {
  const [review, setReview] = useState(""); 
  const [rating, setRating] = useState(0);  

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
      <Divider my="sm" />
      
      <Text >
        Elon Musk <Rating defaultValue={5} size="lg" />
      </Text>
      <Divider my="sm" />
      <Text>
        Example review: "It was okay, could be better." (⭐ 3)
      </Text>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'lg' }}>
        <Pagination total={3} />
      </div>

      <Footer
        year={2024}
        name="Kachapat Punthong"
        id={660612137}
      />
    </Container>
  );
}
