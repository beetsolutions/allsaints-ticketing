import { useMediaQuery, Theme } from '@mui/material';
import {
    BulkDeleteWithConfirmButton,
    Datagrid,
    List,
    SimpleList,
    TextField,
} from 'react-admin';

import NewsEditEmbedded from './NewsEditEmbedded';

const UserBulkActionButtons = (props : any) => (
    <BulkDeleteWithConfirmButton {...props} />
);

const NewsList = () => {
    return (
        <List
            sort={{ field: 'author', order: 'ASC' }}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <SimpleList
                    primaryText={record => record.name}
                />
            ) : (
                <Datagrid
                    expand={<NewsEditEmbedded />}
                    bulkActionButtons={<UserBulkActionButtons />}
                    optimized
                >
                    <TextField source="id" />
                    <TextField source="author" />
                    <TextField source="headline" />
                    <TextField source="videoLink" />
                    <TextField source="imageLink" />
                </Datagrid>
            )}
        </List>
    );
};

export default NewsList;
