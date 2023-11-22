import { useMediaQuery, Theme } from '@mui/material';
import {
    Datagrid,
    List,
    TextField,
    Button,
    useRecordContext,
} from 'react-admin';

import TicketsEditEmbedded from './TicketsEditEmbedded';

const TicketsList = () => {
    const record = useRecordContext();
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
                {record.paymentStatus === 'SOLD' ? (<Button  label='Download'/>) : null}
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
                    {record.paymentStatus === 'SOLD' ? (<Button  label='Download'/>) : null}
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;
