import PropTypes from 'prop-types';
import {Edit, Identifier, SimpleForm, TextInput, required, useRecordContext, Toolbar, SaveButton} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from "ra-input-rich-text";

const UserEditToolbar = (props: any) => (
    <Toolbar {...props} >
        <SaveButton/>
    </Toolbar>
);

const TicketsEditEmbedded = ({ id }: { id?: Identifier }) => {

    const record = useRecordContext();

    const disabledValue = record.paymentStatus === 'SOLD' ? true : false
    return (
        <Edit title=" " id={id}>
            <SimpleForm toolbar={<UserEditToolbar />}>
                <TextInput name="paymentStatus" source="paymentStatus" validate={[required()]} disabled={disabledValue}/>
                <TextInput name="usageStatus" source="usageStatus" validate={[required()]} disabled={disabledValue} />
                <TextInput name="price" source="price" validate={[required()]} disabled={disabledValue}/>
                <TextInput name="type" source="type" validate={[required()]} disabled={disabledValue}/>
                <TextInput type={"hidden"} name="updatedByMemberId"
                           source="updatedByMemberId"
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

TicketsEditEmbedded.propTypes = {
    record: PropTypes.object,
    resource: PropTypes.string,
    id: PropTypes.string,
};

export default TicketsEditEmbedded;