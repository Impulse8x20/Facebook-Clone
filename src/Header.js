import React from 'react'
import "./Header.css";
import Search from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar, IconButton, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}, dispatch]= useStateValue();
  return (
    <div className="header">
        <div className="header__left">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png'
            alt=''
            />
            <div className="header__input">
              <Search />
              <input placeholder='Search Facebook'type="text" />
            </div>
        </div>

        <div className="header__center">
        <div className="header__option
          header__option--active">
            <HomeIcon fontSize = "large"/>
          </div>
          <div className="header__option">
            <FlagIcon fontSize = "large"/>
          </div>
          <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize = "large"/>
          </div>
          <div className="header__option">
            <StorefrontOutlinedIcon fontSize = "large"/>
          </div>
          <div className="header__option">
            <SupervisedUserCircleOutlinedIcon fontSize = "large"/>
          </div>
        </div>
          

        <div className="header__right">
          <div className="header__info">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
          </div>
          

          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>

        </div>
    </div>
  )
}

export default Header;
