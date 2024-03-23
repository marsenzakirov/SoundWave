import { Grid } from "@mui/material";
import { MusicCard, MusicCardProps } from "./music-card";

interface CardListProps {
  items: MusicCardProps[];
  itemsPerRow: number;
  gap?: 0 | 1 | 2 | 3 | 4 | 5;
}

const CardList: React.FC<CardListProps> = ({ items, itemsPerRow, gap = 3 }) => (
  <Grid container>
    {items.map((item, index) => (
      <Grid item key={index} style={{ paddingRight: gap * 30 }}>
        <MusicCard {...item} />
      </Grid>
    ))}
  </Grid>
);

export { CardList };
