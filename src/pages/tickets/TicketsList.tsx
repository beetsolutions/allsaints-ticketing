import { useMediaQuery, Theme } from '@mui/material';
import {
    BulkDeleteWithConfirmButton,
    Datagrid,
    List,
    SimpleList,
    TextField,
    Button
} from 'react-admin';

import TicketsEditEmbedded from './TicketsEditEmbedded';

const UserBulkActionButtons = (props : any) => (
    <BulkDeleteWithConfirmButton {...props} />
);

const postRowSx = (record: any, index:number) => (
        record.paymentStatus === 'SOLD' ? (<Button  label='Download'/>) : <></>
);


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
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;
