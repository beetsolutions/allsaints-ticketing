import { useMediaQuery, Theme } from '@mui/material';
import {
    Datagrid,
    List,
    TextField,
    Button,
    WithRecord
} from 'react-admin';
import TicketsEditEmbedded from './TicketsEditEmbedded';
import '../../app/App.css'
import { useNavigate } from "react-router-dom";

const TicketsList = () => {

    const navigate = useNavigate();

    const ticket = (id: number, type: string) => {
        navigate("/ticket/"+id +'/'+type)
    }

    return (
        <List
            sort={{ field: 'usageStatus', order: 'ASC' }}
            perPage={300}
        >
            {useMediaQuery((theme: Theme) => theme.breakpoints.down('md')) ? (
                <Datagrid
                    expand={<TicketsEditEmbedded />}
                    optimized
                    bulkActionButtons={false}
            >
                <TextField source="id" />
                <TextField source="paymentStatus" />
                <TextField source="type" />
                <WithRecord label="Download" render={record => record.paymentStatus === 'SOLD' ? (<button type='submit' onClick={() => ticket(record.id, record.type)} >Download</button>) : null} />
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
                    <WithRecord label="Download" render={record => record.paymentStatus === 'SOLD' ? (<Button onClick={() => ticket(record.id, record.type)}  label='Download'/>) : null} />
                </Datagrid>
            )}
        </List>
    );
};

export default TicketsList;
