import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import PropTypes from "prop-types";
import {useLogin, useNotify, Form, TextInput, required} from "react-admin";
import {CircularProgress} from "@mui/material";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Powered by '}
            <Link color="inherit" href="#">
                BEET Technologies Ltd.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [performOtp, setPerformOtp] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const notify = useNotify();
    const login = useLogin();
    const navigate = useNavigate();

    const handleSubmit = (auth: FormValues) => {
        const number =  auth.phoneNumber;

        if (number === '+447411431289' || number === '+447366563666' || number === '+447756710982' || number === '+447586746998') {
            if (auth.phoneNumber) {
                setPhoneNumber(auth.phoneNumber)
            }
            setLoading(true);
            login(auth)
                .then((value: AuthValues) => {
                    if (value.path == 'dashboard') {
                        navigate('/');
                    } else {
                        setPerformOtp(true);
                        setLoading(false);
                    }
                })
                .catch((error: Error) => {
                    setLoading(false);
                    notify(
                        typeof error === 'string'
                            ? error
                            : typeof error === 'undefined' || !error.message
                                ? 'This is a login error'
                                : error.message,
                        {
                            type: 'warning',
                            messageArgs: {
                                _:
                                    typeof error === 'string'
                                        ? error
                                        : error && error.message
                                            ? error.message
                                            : undefined,
                            },
                        }
                    );
                });
        } else {
            notify('You are not authorized to use this application. ', {
                type: 'error',
            });
        }
    };

    return (
        <ThemeProvider theme={theme}>

            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            All Saints Ticketing Portal
                        </Typography>
                        <Form onSubmit={handleSubmit} noValidate>
                            <Box sx={{mt: 1}}>

                                {!performOtp && (
                                    <TextInput
                                        margin="normal"
                                        validate={required()}
                                        fullWidth
                                        disabled={loading}
                                        label="Phone Number"
                                        source="phoneNumber"
                                        name="phoneNumber"
                                        autoComplete="phoneNumber"
                                        autoFocus
                                    />
                                )}

                                {performOtp && (
                                    <>
                                        <TextInput
                                            margin="normal"
                                            validate={required()}
                                            fullWidth
                                            disabled={loading}
                                            label="Phone Number"
                                            source="phoneNumber"
                                            name="phoneNumber"
                                            defaultValue={phoneNumber}
                                            autoComplete="phoneNumber"
                                            autoFocus
                                        />

                                        <TextInput
                                            margin="normal"
                                            validate={required()}
                                            fullWidth
                                            disabled={loading}
                                            label="OTP"
                                            source="otp"
                                            name="otp"
                                            autoComplete="otp"
                                            autoFocus
                                        />
                                    </>

                                )}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                    disabled={loading}
                                >
                                    {loading && (
                                        <CircularProgress size={25} thickness={2}/>
                                    )}

                                    {!performOtp && (
                                        'Request OTP'
                                    )}
                                    {performOtp && (
                                        'Verfiy OTP'
                                    )}

                                </Button>
                                <Copyright sx={{mt: 5}}/>
                            </Box>
                        </Form>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
    phoneNumber?: string;
    otp?: string;
}

interface AuthValues {
    path?: string;
    redirectTo?: boolean;
}


