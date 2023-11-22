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
    backgroundColor: record.paymentStatus!== 'SOLD' ? '#efe' : '#e2e2e2',
});

const TicketsList = () => {
    return (
        <List
            sort={{ field: 'usageStatus', order: 'ASC' }}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <SimpleList
                    secondaryText={<TextField source="id" />}
                    primaryText={record => `${record.views} views`}
                    linkType={record => record.paymentStatus!== 'SOLD' ? "edit" : "show"} 
                    rowStyle={postRowStyle}
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
