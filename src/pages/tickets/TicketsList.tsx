import { useMediaQuery, Theme } from '@mui/material';
import {
    Datagrid,
    List,
    TextField,
    Button,
    WithRecord
} from 'react-admin';
import Ticket from "../../components/tickets/Ticket";

import TicketsEditEmbedded from './TicketsEditEmbedded';

const handleDownload = (id: number) => {
    const TicketProps = {
       id: id
    };
    <Ticket {...TicketProps} />
};

const TicketsList = () => {
    return (
        <List
            sort={{ field: 'usageStatus', order: 'ASC' }}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    optimized
                    bulkActionButtons={false}  
            >
                <TextField source="id" />
                <TextField source="paymentStatus" />
                <WithRecord label="Download" render={record => record.paymentStatus === 'SOLD' ? (<Button type='submit' onClick={() => handleDownload(record.id)}  label='Download'/>) : null} />
            </Datagrid>
            ) : (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    optimized
                    bulkActionButtons={false}  
                >
                    <TextField source="id" />
                    <TextField source="paymentStatus" />
                    <TextField source="usageStatus" />
                    <TextField source="type" />
                    <TextField source="price" />
                    <WithRecord label="Download" render={record => record.paymentStatus === 'SOLD' ? (<Button onClick={() => handleDownload(record.id)}  label='Download'/>) : null} />
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;

