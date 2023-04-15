import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import qrImg from "../../Assets/qr.jpeg" 

export default function Contact({img}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=''>
    <React.Fragment >
      <Button style={{backgroundColor:"white"}} variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Scan QR Code
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
             
            }}
          />
          <img src={qrImg} alt='QR code'/>
        </Sheet>
      </Modal>
    </React.Fragment>
    </div>
  );
}