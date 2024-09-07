"use client";
import { Container, Title, Rating, Textarea, Button, Text, Divider, Group, Pagination } from "@mantine/core";
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

      <Title order={4}>Your rating</Title>
      <Rating value={rating} onChange={setRating} size="lg" />
      
      <Textarea
        placeholder="Write your review here..."
        mt="sm"
        value={review}
        onChange={(e) => setReview(e.currentTarget.value)}
        autosize
        minRows={4}
      />
      <Button fullWidth mt="sm" onClick={() => alert("Review submitted!")}>
        Submit Review
      </Button>

      <Divider my="xl" />

      <Title order={3}>Reviews</Title>
      
      <Text mt="sm">
        Example review: "Great food, loved it!" (⭐ 5)
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
