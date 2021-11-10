import { Container, styled } from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}))

function RightBar() {
  return <StyledContainer>Rightbar</StyledContainer>
}

export default RightBar
