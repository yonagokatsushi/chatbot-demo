import React from 'react';
// import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

import NoProfiles from '../assets/img/no-profile.png';
import Torahack from '../assets/img/torahack.png';

const Chat = (props) => {
  // console.log(props);
  const IsQuestion = (props.type === "question");
  const classes = IsQuestion?'p-chat__row':'p-chat__reverse';
    return (
        <ListItem className={classes}>
          <ListItemAvatar>
            {IsQuestion
              ?
              (<Avatar alt="icon" src={Torahack} />)
              :
              (<Avatar alt="icon" src={NoProfiles} />)
            }
          </ListItemAvatar>
          <div className='p-chat__bubble'>{props.content}</div>
        </ListItem>
    )
}

export default Chat