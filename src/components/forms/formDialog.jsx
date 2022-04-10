import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import TextInput from './textInput'

export default class formDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      discription: ""
    }
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDiscription = this.inputDiscription.bind(this);
  }

  inputName = (event) => {
    this.setState({name: event.target.value});
  }

  inputEmail = (event) => {
    this.setState({email: event.target.value});
  }

  inputDiscription = (event) => {
    this.setState({discription: event.target.value});
  }















  submitForm = () => {
    const name = this.state.name;
    const email = this.state.email;
    const discription = this.state.discription;

    const payload = {
      text: 'PPP\n' + 
      'name' + name + '\n' + 
      'email' + email + '\n' + 
      'discription' + discription + '\n'
    };
    const url = 'https://hooks.slack.com/services/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';

    fetch(url, {

      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送付');
      this.setState = ({
        discription: ""

      });
      return this.props.handleClose();
    })
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
          <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
          <DialogContent>
            <TextInput
              label={"なまえ"} multiline={false} type={"text"} rows={1} value={this.state.name} onChange={this.inputName}
             />
            <TextInput
              label="メール" multiline={false} type="email" rows={1} value={this.state.email} onChange={this.inputEmail}
             />
            <TextInput
              label="ないよ" multiline={true} type="text" rows={5} value={this.state.discription} onChange={this.inputDiscription}
             />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose}>やめやめ</Button>
            <Button onClick={this.submitForm}>
              おくる
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
