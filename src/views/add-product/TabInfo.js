// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'


const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {

  return (
    <CardContent>
    <Box sx={{ mt: 5.75, display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          maxWidth: 368,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Avatar
          variant='rounded'
          sx={{ width: 48, height: 48, color: 'common.white', backgroundColor: 'primary.main' }}
        >
          <LockOpenOutline sx={{ fontSize: '1.75rem' }} />
        </Avatar>
        <Typography sx={{ fontWeight: 600, marginTop: 3.5, marginBottom: 3.5 }}>
          Two factor authentication is not enabled yet.
        </Typography>
        <Typography variant='body2'>
          Two-factor authentication adds an additional layer of security to your account by requiring more than just
          a password to log in. Learn more.
        </Typography>
      </Box>
    </Box>

  </CardContent>
  )
}

export default TabInfo
