"use client";
import { Container, Text, Title } from "@mantine/core";
import Footer from "@components/Footer";

export default function Home() {
  
  const name = "Kachapat punthong";
  const studentId = 660612137;
  
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Footer name = {name} studentId = {studentId} />

      <Text ta="center" my="sm">
        Copyright © 2024 {name} {studentId}
      </Text>

    </Container>
  );
}
