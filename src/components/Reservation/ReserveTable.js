import React from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@material-ui/core/Card';
import { CardContent, Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import HowManyPeople from './HowManyPeople';
import HeaderButton from '../HeaderAndFooter/HeaderButton';
import { Modal } from '@material-ui/core';
import InputField from '../Checkout/InputField.js'

function ReserveTable({open, onClose, onBackdropClick}) {
    const [value, setValue] = React.useState(new Date('2021-11-22T12:55:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        
            <Modal open={open} onClose={onClose} onBackdropClick={onClose} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Card style={{
                position: 'inherit',
            }} 
            open="true">
                <CardContent>
                    <Stack spacing={2}>
                    <h4>Reserver bord</h4>
                    <Divider variant="middle"></Divider>
                    <DesktopDatePicker
                    label="Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <Divider variant="middle"></Divider>
                    <HowManyPeople></HowManyPeople>
                    <Divider variant="middle"></Divider>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <InputField type='string' placeholder='Fullt navn'></InputField>
                        <InputField type='string' placeholder='E-post'></InputField>
                        <InputField type='number' placeholder='Tlf'></InputField>
                    </div>
                    <Divider variant="middle"></Divider>
                    <HeaderButton text='Fullfør reservasjon' click={onClose}></HeaderButton>
                    </Stack>
                </CardContent>
            </Card>
        </Modal>
        </LocalizationProvider>
    )
}

export default ReserveTable;