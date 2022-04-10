import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default class formDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleClickOpen = () => {
  //   this.setState({open: true});
  // };

  // handleClose = () => {
  //   this.setState({open: false});alert();
  // };

  render() {

    return (
      <div>
        {/* <Button variant="outlined" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose}>Disagree</Button>
            <Button onClick={this.props.handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
