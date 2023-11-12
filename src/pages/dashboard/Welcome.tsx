import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';

export const Welcome = () => {
    return (
        <Card
            sx={{
                background: `#c5dedd`,
                color: 'rgba(0, 0, 0, 0.87)',
                padding: '1em',
                marginBottom: '1em',
                marginTop: '2em',
                [`& .MuiCardActions-root`]: {
                    p: 2,
                    mt: -2,
                    mb: -1,
                    flexDirection: 'column',
                    '& a': {
                        mb: 1,
                        color: 'rgba(0, 0, 0, 0.87)',
                        backgroundColor: 'white',
                        marginLeft: '0 !important',
                    },
                },
            }}
        >
            <CardContent>
                <Typography align={'left'} variant="h5" gutterBottom>
                    CRM demo
                </Typography>
                <Typography align={'left'} gutterBottom>
                    This app runs in the browser, and relies on a mock REST API.
                    Feel free to explore and modify the data - it's local to
                    your computer, and will reset each time you reload.
                </Typography>
                <Typography align={'left'} gutterBottom>
                    It was built using react-admin, an open-source framework.
                    The code for this demo is also open-source. Reading it is a
                    great way to learn react-admin!
                </Typography>
            </CardContent>
        </Card>
    );
};
