import React from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


type ModalProps = {
    btnTitle: string,
    children: JSX.Element
}

const dialogStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const closeIconStyle = {
    cursor: 'pointer'
}

const ModalWindow = ({btnTitle, children}: ModalProps) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {btnTitle}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <div style={dialogStyle}>
                        {btnTitle}
                        <CloseIcon onClick={handleClose} style={closeIconStyle}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers >
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalWindow;
