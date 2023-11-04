import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Confetti from 'react-confetti'

interface TryAgainProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function TermsAndConditions( { open, setOpen }: TryAgainProps ) {
  const [openConfetti, setOpenConfetti] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {
          openConfetti && (
            <Confetti
              
            />
          )
        }
        <DialogTitle id="alert-dialog-title">
          {"Terminos y condiciones"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            1. Hacer pasta todos los dias
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            2. Ser la mejor novia del mundo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} onClick={() => setOpenConfetti(!openConfetti)}
          >Aceptar</Button>
          <Button onClick={handleClose} autoFocus>
            Rechazar
          </Button>
        </DialogActions>
      </Dialog>    
  );
}