import { useMediaQuery, Theme } from '@mui/material';
import {
    BulkDeleteWithConfirmButton,
    Datagrid,
    List,
    SimpleList,
    TextField,
} from 'react-admin';

import TicketsEditEmbedded from './TicketsEditEmbedded';

const UserBulkActionButtons = (props : any) => (
    <BulkDeleteWithConfirmButton {...props} />
);

const postRowStyle = (record: any, index: number) => ({
    backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
});

const TicketsList = () => {
    return (
        <List
            sort={{ field: 'usageStatus', order: 'ASC' }}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <SimpleList
                    secondaryText={record => record.id}
                    primaryText={record => record.price}
                    linkType={record => record.paymentStatus!== 'SOLD' ? "edit" : "show"} 
                />
            ) : (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    bulkActionButtons={<UserBulkActionButtons />}
                    optimized
                >
                    <TextField source="id" />
                    <TextField source="paymentStatus" />
                    <TextField source="usageStatus" />
                    <TextField source="type" />
                    <TextField source="price" />
                    <TextField source="notes" />
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;
