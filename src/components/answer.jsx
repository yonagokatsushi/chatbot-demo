import * as React from 'react';
import Button from '@material-ui/core/Button';
// import Stack from '@material-ui/core/Stack';


const Answer = (props) => {
    return (
        <Button variant="contained">

            {props.content}
        </Button>
    )
}

export default Answer