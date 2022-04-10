import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/styles'; // import Stack from '@mui/material/Stack';

// const useStyles = makeStyles(() =>
//     createStyles({
//         "button": {
//         }
//     }),
// );

const Answer = (props) => {
    // const classes = useStyles();
    return (
        <Button variant="contained" color='primary' onClick={() => props.select(props.content , props.nextId)} sx={{

            marginBottom: "8px",
            borderColor: "#FFB549",
            backgroundColor: "#FFFFFF",
            fontWeight: 600,
            color: "#FFB549",
            "&:hover": {
                backgroundColor: "#FFB549",
                color: "#fff"
            }
        }}>

            {props.content}
        </Button>
    )
}

export default Answer