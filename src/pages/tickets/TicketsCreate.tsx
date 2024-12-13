import {useFormContext} from 'react-hook-form';
import {
    Create,
    FormTab,
    SaveButton,
    TabbedForm,
    TextInput,
    Toolbar,
    required,
    useNotify,
    usePermissions,
} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from 'ra-input-rich-text';
// @ts-ignore
const ConstitutionEditToolbar = ({permissions, ...props}) => {
    const notify = useNotify();
    const {reset} = useFormContext();

    return (
        <Toolbar {...props}>
            <SaveButton label="tickets.action.save_and_show"/>

            <SaveButton
                label="tickets.action.save_and_add"
                mutationOptions={{
                    onSuccess: data => {
                        console.log(data);
                        notify('ra.notification.created', {
                            type: 'info',
                            messageArgs: {
                                smart_count: 1,
                            },
                        });
                        reset();
                    },
                }}
                type="button"
                variant="text"
            />
        </Toolbar>
    );
};

const TicketsCreate = () => {
    const {permissions} = usePermissions();
    return (
        <Create redirect="show">
            <TabbedForm
                mode="onBlur"
                warnWhenUnsavedChanges
                toolbar={<ConstitutionEditToolbar permissions={permissions}/>}
            >
                {localStorage.getItem('id') === '18' ? (
                    <FormTab label="tickets.form.summary" path="">
                        <TextInput type={"hidden"} name="updatedByMemberId" source="updatedByMemberId"
                                   validate={[required()]}
                                   defaultValue={localStorage.getItem('id')}
                                   value={localStorage.getItem('id')}
                        />
                        <TextInput name="paymentStatus" source="paymentStatus" validate={[required()]}/>
                        <TextInput name="usageStatus" source="usageStatus" validate={[required()]}/>
                        <TextInput name="price" source="price" validate={[required()]}/>
                        <TextInput name="type" source="type" validate={[required()]}/>
                        <TextInput name="member" source="member" />
                        <RichTextInput
                            name="notes"
                            source="notes" toolbar={<RichTextInputToolbar size="large"/>}
                        />
                    </FormTab>
                ) : (
                    <>You have no permission to create tickets</>
                )
                }

            </TabbedForm>
        </Create>
    );
};

export default TicketsCreate;

