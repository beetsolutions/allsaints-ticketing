import {CircularProgress, Grid} from '@mui/material';
import {Welcome} from './Welcome';
import NumberCard from "./NumberCard";
import MoneyCard from './MoneyCard';
import {useGetOne} from "react-admin";

export const Dashboard = () => {

    const { data, isLoading, error, refetch } = useGetOne("tickets/stats", { id: 1 });



    if (isLoading) { return  <CircularProgress size={25} thickness={2}/>; }
    if (error) { return <p>ERROR</p>; }

    console.log(data)
    console.log('moneyCollected' + data.moneyCollected)
    return (
        <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={3}>
                <NumberCard value={data.venueCapacity} title={'pos.dashboard.venue_capacity'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <NumberCard value={data.numberOfTicketsSold} title={'pos.dashboard.tickets_sold'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <NumberCard value={data.totalSingleTicketsSold} title={'Single Tickets Sold'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <NumberCard value={data.totalDoubleTicketsSold} title={'Double Tickets Sold'} />
            </Grid>
            <Grid item xs={12} md={3}>
                <MoneyCard value={"£" + data.moneyCollected} title={'pos.dashboard.money_collected'} />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={12} md={4}>
                <Welcome/>
            </Grid>
        </Grid>
    );
};

