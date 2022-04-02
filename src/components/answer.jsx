import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Answer = (props) => {
    return (
        <Button variant="contained" color='primary'>

            {props.content}
        </Button>
    )
}

export default Answer