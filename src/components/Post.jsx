import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  styled,
  Typography,
} from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}))

function Post() {
  return (
    <Card sx={{ mb: 5 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: { sm: 250, xs: 150 } }}
          className="media"
          image="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            tempora odit iste aliquid in expedita illum saepe eos, nihil
            assumenda optio earum, voluptates sit nesciunt consequatur soluta
            harum corrupti omnis!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
