import React, {useState} from 'react';
import { FormControl, Input, FormHelperText, Button, Grid, CardContent, Typography, Card } from '@mui/material';
import Box from '@mui/material/Box';


const Login = () => {
    const [login, setLogin] = useState('');
    const [passkey, setPasskey] = useState('');

    return(

        <Grid container justifyContent="center" mt={2} style={{ minHeight: "100vh" }}>
        <Grid item xs={11} sm={8} md={6} lg={4}>
            <Card>
                <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>  
                            Login 
                        </Typography>
                        <FormControl fullWidth margin="normal">
                        <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
                        <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
          <Input id="passkey" aria-describedby="passkey_helper_text" value={passkey} onChange={e => { setPasskey(e.target.value) }} />
          <FormHelperText id="login_nome_helper_text">Passkey</FormHelperText>
        </FormControl>
        <div>
        <Button mt={4} variant="contained">Logar</Button>
        </div>
        
                </CardContent>  
            </Card>
    </Grid>
    </Grid>

    );
}

export default Login;