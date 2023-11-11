import PropTypes from 'prop-types';
import {Edit, Identifier, SimpleForm, TextInput, required} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from "ra-input-rich-text";

const TicketsEditEmbedded = ({ id }: { id?: Identifier }) => (
    <Edit title=" " id={id}>
        <SimpleForm>
            <TextInput name="paymentStatus" source="paymentStatus" validate={[required()]}/>
            <TextInput name="usageStatus" source="usageStatus" validate={[required()]}/>
            <TextInput name="price" source="price" validate={[required()]}/>
            <TextInput name="type" source="type" validate={[required()]}/>
            <RichTextInput
                name="notes"
                source="notes" toolbar={<RichTextInputToolbar size="large"/>}
            />
        </SimpleForm>
    </Edit>
);

TicketsEditEmbedded.propTypes = {
    record: PropTypes.object,
    resource: PropTypes.string,
    id: PropTypes.string,
};

export default TicketsEditEmbedded;