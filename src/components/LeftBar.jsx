import {
  Bookmark,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@mui/icons-material'
import ListIcon from '@mui/icons-material/List'
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'

const StyledContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  paddingTop: theme.spacing(7),
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  position: 'sticky',
  top: 0,
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'white',
    color: '#555',
    border: '1px solid #ece7e7',
  },
  '#lefbarList': {},
  '.text': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '.itemIcon': {
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset',
    },
  },
  '.icon': {
    [theme.breakpoints.down('sm')]: {
      color: 'white',
    },
  },
  '.itemButton': {
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      paddingLeft: 0,
      justifyContent: 'center',
    },
  },
}))
function LeftBar() {
  return (
    <StyledContainer>
      <List id="lefbarList">
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <Home className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <Person className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <ListIcon className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Lists" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <PhotoCamera className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Camera" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <PlayCircleOutline className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Videos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <TabletMac className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Apps" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <Bookmark className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Collections" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <Storefront className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Market Place" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <Settings className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="itemButton">
            <ListItemIcon className="itemIcon">
              <ExitToApp className="icon" />
            </ListItemIcon>
            <ListItemText className="text" primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledContainer>
  )
}

export default LeftBar
