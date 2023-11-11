import {
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
} from 'react-admin';

const NewsShow = () => {
    return (
        <Show>
            <TabbedShowLayout>
                <Tab label="user.form.summary">
                    <TextField source="id" />
                    <TextField source="version" />
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default NewsShow;