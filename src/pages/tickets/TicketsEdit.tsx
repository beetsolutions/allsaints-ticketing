import {Edit, required, SimpleForm, TextInput, useRecordContext} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from 'ra-input-rich-text';

const TicketsEdit = () => {

    const record = useRecordContext();

    const disabledValue = record.paymentStatus === 'SOLD' ? true : false

    return (
        <Edit>
        <SimpleForm>
            <TextInput name="id" disabled source="id"/>
            <TextInput name="paymentStatus" source="paymentStatus" validate={[required()]} disabled={disabledValue} />
            <TextInput name="usageStatus" source="usageStatus" validate={[required()]} disabled={disabledValue} />
            <TextInput name="price" source="price" validate={[required()]} disabled={disabledValue}/>
            <TextInput name="type" source="type" validate={[required()]} disabled={disabledValue} />
            <TextInput type={"hidden"} name="updatedByMemberId" source="updatedByMemberId"
                       validate={[required()]}
                       defaultValue={localStorage.getItem('id')}
                       value={localStorage.getItem('id')}
                       disabled={disabledValue}
            />
            <RichTextInput
                name="notes"
                source="notes" toolbar={<RichTextInputToolbar size="large"/>}
                disabled={disabledValue}
            />
        </SimpleForm>
    </Edit>
    );
}

export default TicketsEdit;