import Box from '@mui/material/Box';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

import Logo from './Logo';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';
import {Typography} from "@mui/material";

const Menu = ({dense = false}: MenuProps) => {
    const translate = useTranslate();
    const [open] = useSidebarState();

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                paddingTop: 5,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                height: "100%",
                backgroundColor: theme =>
                        theme.palette.mode === 'dark'
                            ? '#6e6213'
                            : '#420b6e'
            }}
        >
            <DashboardMenuItem
                sx={{
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)'
                    }
                }}
            />

            <MenuItemLink
                to="tickets"
                state={{_scrollToTop: true}}
                primaryText={translate(`resources.tickets.name`, {
                    smart_count: 2,
                })}
                leftIcon={<ConfirmationNumberIcon/>}
                dense={dense}
                sx={{
                    '&:hover': {
                        backgroundColor: '#502b64',
                    }
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: 2,
                    marginTop: 2
                }}>
                { open ?
                    (<><Typography variant="inherit" color="primary"
                                   sx={{
                                       color: '#fff',
                                       marginLeft: 0,
                                       marginBottom: 0,
                                   }}
                    >
                        Powered by:
                    </Typography><Logo/></>)
                    : null
                }
            </Box>
        </Box>
    );
};

export default Menu;
