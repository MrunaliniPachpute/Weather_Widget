import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

export default function Header(){
  return (<>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather Widgit
          </Typography>
          <Button sx={{ border: '1px solid gray'}} variant='outline' endIcon={<LoginIcon />}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>)
}