import { Cancel, Mail, Notifications } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'

const Search = styled('div')(({ theme, opensearch }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
  width: '50%',
  [theme.breakpoints.down('sm')]: {
    display: opensearch ? 'flex' : 'none',
  },
  '.cancelButton': {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  transition: 'all ease 10s',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(1),
}))

const Icons = styled('div')(({ theme, opensearch }) => ({
  display: opensearch ? 'none' : 'flex',
  alignItems: 'center',
  '.searchButton': {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  '.avatarButton': {
    padding: 0,
  },
  transition: 'all ease 10s',
}))
// const Icons = style

function NavBar() {
  const [openSearch, setOpenSearch] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()

  const isMenuOpen = Boolean(anchorEl)

  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {matches ? (
            <Typography variant="h6">MyNetwork</Typography>
          ) : (
            <Typography variant="h6">MN</Typography>
          )}
        </Box>
        <Search opensearch={openSearch ? 1 : 0}>
          <SearchIcon />
          <StyledInputBase placeholder="Search..." />
          <IconButton
            className="cancelButton"
            onClick={() => setOpenSearch(false)}
            size="small"
            edge={false}
            color="inherit"
          >
            <Cancel />
          </IconButton>
        </Search>
        <Icons opensearch={openSearch ? 1 : 0}>
          <IconButton
            className="searchButton"
            onClick={() => setOpenSearch(true)}
            size="large"
            color="inherit"
          >
            <SearchIcon className="searchButton" />
          </IconButton>
          <IconButton
            className="badge"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            className="badge"
            size="large"
            aria-label="show 2 new notifications"
            color="inherit"
          >
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            className="avatarButton"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar
              alt="Reny Sharp"
              src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg"
            />
          </IconButton>
        </Icons>
      </Toolbar>
      {renderMenu}
    </AppBar>
  )
}

export default NavBar
