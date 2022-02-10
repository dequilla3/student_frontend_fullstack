import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from "@material-ui/core"
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

export default function StudentAdd() {
    const paperStyle = { padding: '50px 20px', width: 500, margin: "20px auto" }
    const [name, setName] = useState('');
    const [address, setAddress] = React.useState('');
    const handleClick = (e) => {
        e.preventDefault()
        const student = { address, name }
        fetch("http://localhost:8080/api/student/add",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            }
        )
    }
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
                        value={name} onChange={(e) => setName(e.target.value)} />

                    <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
                        value={address} onChange={(e) => setAddress(e.target.value)} />

                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>

    );
}
