import PropTypes from 'prop-types';
import {Edit, Identifier, SimpleForm, TextInput, required} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from "ra-input-rich-text";

const TicketsEditEmbedded = ({ id }: { id?: Identifier }) => (
    <Edit title=" " id={id}>
        <SimpleForm>
            <TextInput name="paymentStatus" source="paymentStatus" validate={[required()]} disabled/>
            <TextInput name="usageStatus" source="usageStatus" validate={[required()]} disabled />
            <TextInput name="price" source="price" validate={[required()]} disabled/>
            <TextInput name="type" source="type" validate={[required()]} disabled/>
            <TextInput type={"hidden"} name="updatedByMemberId"
                       source="updatedByMemberId"
                       validate={[required()]}
                       defaultValue={localStorage.getItem('id')}
                       value={localStorage.getItem('id')}
                       disabled
            />
            <RichTextInput
                name="notes"
                source="notes" toolbar={<RichTextInputToolbar size="large"/>}
                disabled
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