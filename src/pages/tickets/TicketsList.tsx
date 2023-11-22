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


const TicketsList = () => {
    return (
        <List
            sort={{ field: 'usageStatus', order: 'ASC' }}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    optimized
                    isRowSelectable={row => false}    
            >
                <TextField source="id" />
                <TextField source="paymentStatus" />
                <Button  label='Download'/>
            </Datagrid>
            ) : (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    bulkActionButtons={<UserBulkActionButtons />}
                    optimized
                    isRowSelectable={row => false}    
                >
                    <TextField source="id" />
                    <TextField source="paymentStatus" />
                    <TextField source="usageStatus" />
                    <TextField source="type" />
                    <TextField source="price" />
                    <Button  label='Download'/>
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;
