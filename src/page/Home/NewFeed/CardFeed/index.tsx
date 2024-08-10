import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
interface CardFeedPropType extends CardProps {
  title?: string;
  image?: string;
  links?: string;
  description?: string;
}

function CardFeed(props: CardFeedPropType) {
  const { title, image, description, links, ...rest } = props;
  return (
    <Link href={links}>
      <Card
        {...rest}
        sx={{
          '&:hover': {
            boxShadow: ' rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
            transition: 'all 0.3s ease-in',
            bgcolor: 'primary.dark',
            color: 'white',
          },
          cursor: 'pointer',
        }}
      >
        <CardMedia
          sx={{ height: 140, objectFit: 'cover' }}
          image={`${image}`}
          title='green iguana'
        />
        <CardContent sx={{ height: 150 }}>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Link>
  );
}

export default CardFeed;
