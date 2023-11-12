import {
    Typography,
    Card,
    CardContent,
} from '@mui/material';

export const Welcome = () => {
    return (
        <Card
            sx={{
                background: `#cfd3cc`,
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
                <Typography align={'left'} variant="h3" gutterBottom>
                    Instructions
                </Typography>
                <Typography align={'left'} variant="h5" gutterBottom>
                    Rules of selling a ticket
                </Typography>
                <Typography align={'left'} gutterBottom>
                    1.) Click on the tickets menu on the left.
                </Typography>
                <Typography align={'left'} gutterBottom>
                    2.) You will see a list of tickets.
                </Typography>
                <Typography align={'left'} gutterBottom>
                    3.) Select a ticket with Payment status 'AVAILABLE'
                </Typography>
                <Typography align={'left'} gutterBottom>
                    4.) Edit the ticket status to 'SOLD'
                </Typography>
                <Typography align={'left'} gutterBottom>
                    5.) Save it and you have made a sale.
                </Typography>
            </CardContent>
        </Card>
    );
};
