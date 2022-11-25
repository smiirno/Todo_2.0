import React from 'react';
import {Button, Dialog, DialogContent, DialogTitle,} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {
    ModalCloseIconStyle,
    ModalHeaderStyle,
    OutlinedBtnStyle,
    OutlinedErrorBtnStyle
} from "../../custom_MUI_styles/custom_MUI_styles";


type ModalProps = {
    btnTitle: string,
    btnType: 'default' | 'error',
    children: JSX.Element
}


const ModalWindow = ({btnTitle, btnType, children}: ModalProps) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button onClick={handleClickOpen} sx={btnType === 'default' ? OutlinedBtnStyle : OutlinedErrorBtnStyle} variant="outlined" >
                {btnTitle}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <div style={ModalHeaderStyle}>
                        {btnTitle}
                        <CloseIcon onClick={handleClose} style={ModalCloseIconStyle}/>
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
