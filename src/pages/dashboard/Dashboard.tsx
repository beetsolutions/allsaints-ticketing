import {Grid} from '@mui/material';

import {Welcome} from './Welcome';

import MonthlyRevenue from './MonthlyRevenue';
import NewMembers from "./NewMembers";

export const Dashboard = () => (
    <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={2}>
            <MonthlyRevenue title={'pos.dashboard.monthly_revenue'} value={"£300,000"}/>
        </Grid>
        <Grid item xs={12} md={2}>
            <MonthlyRevenue title={'pos.dashboard.budget'} value={"£300,000"}/>
        </Grid>
        <Grid item xs={12} md={2}>
            <NewMembers value={"30"}/>
        </Grid>
        <Grid item xs={12} md={2}>
            <MonthlyRevenue title={'pos.dashboard.contributions'} value={"£1000"}/>
        </Grid>
        <Grid item xs={12} md={2}>
        </Grid>
        <Grid item xs={12} md={2}>

        </Grid>
        <Grid item xs={12} md={3}>
            <Welcome/>
        </Grid>
        <Grid item xs={12} md={3}>
            <Welcome/>
        </Grid>
        <Grid item xs={12} md={3}>
            <Welcome/>
        </Grid>
        <Grid item xs={12} md={3}>
            <Welcome/>
        </Grid>
    </Grid>
);
