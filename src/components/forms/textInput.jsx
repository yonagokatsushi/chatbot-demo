import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInput = (props) => {
  return (
    <TextField fullWidth label={props.label}
        type={props.type}
        rows={props.rows}
        multiline={props.multiline}
        margin="dense"
        value={props.value}
        onChange={props.onChange}
      />
  );
}

export default TextInput;
