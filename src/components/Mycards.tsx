import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Link } from 'react-router-dom';

export default function Mycards(prop:any) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{prop.title}</Typography>
    
      </div>
      <AspectRatio   className='bg-image hover-zoom' minHeight="120px" maxHeight="200px">
        <img  className='img-fluid shadow-2-strong rounded-4' style={{objectFit:"fill"}} src={prop.img}
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
         {prop.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        
        >
          <Link to={'/cart'} className='head'>
       Buy now</Link>
        </Button>
        
      </CardContent>
    </Card>
  );
}
