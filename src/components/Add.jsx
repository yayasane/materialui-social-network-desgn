import AddIcon from '@mui/icons-material/Add'
import {
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  styled,
  TextField,
  Tooltip,
} from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { forwardRef, useState } from 'react'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
const StyledContainer = styled(Container)(({ theme }) => ({
  width: 500,
  height: 550,
  background: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: '100vh',
  },
  '.form': {
    padding: theme.spacing(2),
  },
  '.formField': {
    marginBottom: theme.spacing(2.5),
  },
}))

function Add() {
  const [openModal, setOpenModal] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenAlert(false)
  }

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpenModal(true)}>
        <Fab color="primary" sx={{ position: 'fixed', bottom: 20, right: 20 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={openModal}>
        <StyledContainer>
          <form className="form" autoComplete="off">
            <div className="formField">
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                variant="standard"
                sx={{ width: '100%' }}
              />
            </div>
            <div className="formField">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                sx={{ width: '100%' }}
              />
            </div>
            <div className="formField">
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className="formField">
              <FormControl component="fieldset">
                <FormLabel component="legend">Who can see the post?</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio size="small" />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio size="small" />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="Custom"
                    control={<Radio size="small" />}
                    label="Custom(Premium)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="formField">
              <Button
                variant="outlined"
                color="primary"
                sx={{ mr: 2 }}
                onClick={() => {
                  setOpenAlert(true)
                }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </StyledContainer>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add
