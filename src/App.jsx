import { Grid } from '@mui/material'
import LeftBar from './components/LeftBar'
import Feed from './components/Feed'
import Rightbar from './components/RightBar'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Rightbar />{' '}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
