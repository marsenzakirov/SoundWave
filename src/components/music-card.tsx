import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

export interface MusicCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, imageUrl, description }) => (
  <Card elevation={6} style={{ width: 200, height: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={title}
      />
      <CardContent style={{ height: '150px', overflow: 'hidden' }}>
        <Typography gutterBottom variant="h6" component="div" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);




export { MusicCard };
