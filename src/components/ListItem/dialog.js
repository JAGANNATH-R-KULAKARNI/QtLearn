import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import GroupingUI from './grouping';

export default function DialogSelect(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      props.setLanStatus(false)
    }
  };

  return (
    <div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Language</DialogTitle>
       <GroupingUI/>
        <DialogActions>
          <Button onClick={handleClose}>Apply & Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
