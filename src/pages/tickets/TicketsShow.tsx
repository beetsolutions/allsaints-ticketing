import {
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
} from 'react-admin';

const TicketsShow = () => {
    return (
        <Show>
            <TabbedShowLayout>
                <Tab label="resources.tickets.detail">
                    <TextField source="id" />
                    <TextField source="paymentStatus" />
                    <TextField source="usageStatus" />
                    <TextField source="type" />
                    <TextField source="member" />
                    <TextField source="price" />
                    <TextField source="notes" />
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default TicketsShow;
