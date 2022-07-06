import React from 'react';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

import Stack from '@mui/material/styles';
import {Chat} from './index';

const Chats = (props) => {
    
      return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',height: "400px",padding: "0",overflow: "auto"}} id='sca'>




            {props.chats.map((chat,index) => {
                return <Chat content={chat.text} type={chat.type} key={index.toString()} />
            })}

        </List>


    )


}
export default Chats