import { Container, styled } from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}))

function Feed() {
  return <StyledContainer>Feed</StyledContainer>
}

export default Feed
