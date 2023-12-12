import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { AddShoppingCart } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardProduct() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
        <Typography variant='h5' color='textsecondary'> 
        {accounting.formatMoney(50,'€')}
        </Typography>
        }
        title="Samsung s23 ultra"
        subheader="256gb-512gb-1tera ."
      />
      <CardMedia
        component="img"
        height="194"
        image="https://fscl01.fonpit.de/userfiles/7687254/image/Samsung_Galaxy_S22_Ultra/NextPit_Samsung_Galaxy_S22_Ultra_Camera.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          in stock
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to cart'>
            <AddShoppingCart fontSize='large'/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>prestaciones:</Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
          El Samsung Galaxy S23 Ultra es el más poderoso de la serie Galaxy S23. Con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas a 1440 x 3088 pixels de resolución y tasa de refresco de 120Hz, el Galaxy S23 Ultra está potenciado por una versión especial del chip Snapdragon 8 Gen 2 junto con hasta 12GB de RAM y hasta 1TB de almacenamiento interno
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
