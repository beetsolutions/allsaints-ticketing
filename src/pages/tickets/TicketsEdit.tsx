import {Edit, required, SimpleForm, TextInput} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from 'ra-input-rich-text';

const TicketsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput name="id" disabled source="id"/>
            <TextInput name="paymentStatus" source="paymentStatus" validate={[required()]}/>
            <TextInput name="usageStatus" source="usageStatus" validate={[required()]}/>
            <TextInput name="price" source="price" validate={[required()]}/>
            <TextInput name="type" source="type" validate={[required()]}/>
            <TextInput type={"hidden"} name="updatedByMemberId" source="updatedByMemberId"
                       validate={[required()]}
                       defaultValue={localStorage.getItem('id')}
                       value={localStorage.getItem('id')}
            />
            <RichTextInput
                name="notes"
                source="notes" toolbar={<RichTextInputToolbar size="large"/>}
            />
        </SimpleForm>
    </Edit>
);

export default TicketsEdit;