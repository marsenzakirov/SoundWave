import React from "react";
import { Container, Typography } from "@mui/material";
import { CardList } from "../components/card-list";

// Temporary example data
const songMixes = [
  {
    title: "Летний Микс",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    description: "Свежие летние хиты",
  },
  {
    title: "Релакс Микс",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    description: "Музыка для релаксации",
  },
  {
    title: "Танцевальный Микс",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    description: "Зажигательные танцевальные треки",
  },
];

const popularSongs = [
  {
    title: "Песня 1",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    description: "Исполнитель 1",
  },
  {
    title: "Песня 2",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    description: "Исполнитель 2",
  },
  {
    title: "Песня 3",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e",
    description: "Исполнитель 3",
  },
];

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ padding: "1rem" }}>
      <Typography variant="h4" gutterBottom>
        Your top mixes
      </Typography>
      <CardList items={songMixes} itemsPerRow={3} />

      <Typography variant="h4" gutterBottom style={{ marginTop: "2rem" }}>
        recently played
      </Typography>
      <CardList items={popularSongs} itemsPerRow={3} />
    </Container>
  );
};

export default Home;
