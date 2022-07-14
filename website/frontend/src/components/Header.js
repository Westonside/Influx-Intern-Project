import React, { useSyncExternalStore } from "react";
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { TextField } from "@mui/material";
import styles from '../componentStyles/HeaderStyles';
import { Popper } from "@mui/material";
import { Paper } from "@mui/material";
import { Grow } from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { MenuList } from "@mui/material";
import axios from "axios";
const Header = ({
    setSearched,
    page,
    
}) =>{
    const [logged, setlogged] = useState(false)
    const classes = styles()
    const [searchingTerms, setsearchingTerms] = useState("")
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    const signOut = () =>{
      axios.get("/api/logout_user/")
      window.location.reload()
    }

    const checkLogged = () =>{
      axios.get("/api/logged_in/")
      .then(res =>{

          console.log(res.data)
          
          // alert(res.data.redirect)
          // alert(res.data.success)
          if (res.data.success){
            setlogged(true)
          } 
          // alert(window.location.href, window.location.href === "http://localhost:3000/register")

          console.log(res.data, res.data.success, window.location.href)

          //super fast shit fix for hackathon purposes never do this haha
          if (res.data.success === false && !(window.location.href === "http://localhost:3000/register")){
              console.log("got here ")
              window.location.replace("/register")
          }

      })
  }

  // React.useEffect(()=>{
  //   checkLogged()
  // },[]);
  
  checkLogged()

    const whichDrop = () =>{
      if (logged) {
        return(
          <MenuItem onClick={signOut}>Sign Out</MenuItem>

        )
      }
      return(
        <MenuItem onClick={null}>Sign In</MenuItem>
      )
    }
    
    const handleToggle = () => {
      console.log('open?')
     setOpen((prevOpen) => !prevOpen);
    };


      const onChangeSearch = (e) =>{
        setSearched(e.target.value)
        setsearchingTerms(e.target.value)
      }

      const handleClose = (event) => {
        setOpen(false)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
      }
   

   
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Stocks
          </Typography>
          {page === "index" &&(
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className={classes.searchBar}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
            id="input-with-sx" 
            value={searchingTerms}
            onChange={onChangeSearch}
            label="With sx" variant="standard" color="secondary" />
            </Box>
          )}
          
    
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
            onClick={handleToggle}
              size="large"
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}

              
              color="inherit"
            >
              <AccountCircle 
              aria-haspopup="true"
              
              ref={anchorRef}
              aria-expanded={open}
              aria-controls={open ? 'soething' : undefined} />
              
            </IconButton>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
         {({ TransitionProps, placement }) => (
           <Grow
             {...TransitionProps}
             style={{
               transformOrigin:
                 placement === 'bottom-start' ? 'left top' : 'left bottom',
             }}
           >
             <Paper>
               <ClickAwayListener onClickAway={handleClose}>
                 <MenuList
                   autoFocusItem={open}
                   id="composition-menu"
                   aria-labelledby="composition-button"
                 >
                  
                  {whichDrop()}

                   <MenuItem onClick={handleClose}>Close</MenuItem>
                 </MenuList>
               </ClickAwayListener>
             </Paper>
           </Grow>
         )}
       </Popper>
           
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
            //   aria-controls={mobileMenuId}
              aria-haspopup="true"
            //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>


            

          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
    )
}

export default Header;