import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  styled,
  Typography,
} from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  position: 'sticky',
  top: 0,
  '.link': {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}))

function RightBar() {
  return (
    <StyledContainer>
      <Typography gutterBottom>Online friends</Typography>
      <AvatarGroup max={6} sx={{ mb: 2 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography gutterBottom>Gallery</Typography>
      <ImageList cols={2} rowHeight={164} sx={{ mb: 2 }}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography gutterBottom>Catégories</Typography>
      <Link href="#" variant="body2" className="link">
        Sport
      </Link>
      <Link href="#" variant="body2" className="link">
        Food
      </Link>
      <Link href="#" variant="body2" className="link">
        Music
      </Link>
      <Divider flexItem sx={{ mb: 1 }} />
      <Link href="#" variant="body2" className="link">
        Movies
      </Link>
      <Link href="#" variant="body2" className="link">
        Science
      </Link>
      <Link href="#" variant="body2" className="link">
        Life
      </Link>
    </StyledContainer>
  )
}

export default RightBar
