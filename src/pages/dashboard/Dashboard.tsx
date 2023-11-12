import {Grid} from '@mui/material';
import {Welcome} from './Welcome';
import NumberCard from "./NumberCard";
import MoneyCard from './MoneyCard';

export const Dashboard = () => (
    <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={2}>
            <NumberCard value={"300"} title={'pos.dashboard.venue_capacity'}/>
        </Grid>
        <Grid item xs={12} md={2}>
            <NumberCard value={"114"} title={'pos.dashboard.tickets_sold'}/>
        </Grid>
        <Grid item xs={12} md={2}>
            <NumberCard title={'pos.dashboard.tickets_remaining'} value={"186"}/>
        </Grid>
        <Grid item xs={12} md={2}>
            <MoneyCard title={'pos.dashboard.money_collected'} value={"TBC"}/>
        </Grid>
        <Grid item xs={12} >
            <Welcome/>
        </Grid>
    </Grid>
);
