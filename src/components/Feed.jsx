import { Container, styled } from '@mui/material'
import Post from './Post'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}))

function Feed() {
  return (
    <StyledContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </StyledContainer>
  )
}

export default Feed
