import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  Typography,
} from '@mui/material';
import React from 'react';
interface CardFeedPropType extends CardProps {
  title?: string;
  image?: string;
  description?: string;
}

function CardFeed(props: CardFeedPropType) {
  const { title, image, description, ...rest } = props;
  return (
    <Card
      {...rest}
      sx={{
        '&:hover': {
          boxShadow: ' rgba(7, 76, 122, 0.24) 0px 6px 8px;',
          transition: 'all 0.3s ease-in',
          bgcolor: 'primary.dark',
          color: 'white',
        },
        cursor: 'pointer',
      }}
    >
      <CardMedia sx={{ height: 140, objectFit: 'cover' }} image={`${image}`} title='green iguana' />
      <CardContent sx={{ height: 150 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Xem chi tiết</Button>
      </CardActions>
    </Card>
  );
}

export default CardFeed;
