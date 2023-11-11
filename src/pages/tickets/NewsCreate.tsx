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
            <SaveButton label="news.action.save_and_show"/>

            <SaveButton
                label="news.action.save_and_add"
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

const NewsCreate = () => {
    const {permissions} = usePermissions();
    return (
        <Create redirect="show">
            <TabbedForm
                mode="onBlur"
                warnWhenUnsavedChanges
                toolbar={<ConstitutionEditToolbar permissions={permissions}/>}
            >
                <FormTab label="news.form.summary" path="">
                    <TextInput name="title" source="title" validate={[required()]}/>
                    <TextInput name="author" source="author" validate={[required()]}/>
                    <RichTextInput
                        name="headline"
                        source="headline" toolbar={<RichTextInputToolbar size="large"/>}
                    />
                    <RichTextInput
                        name="description"
                        source="description" toolbar={<RichTextInputToolbar size="large"/>}
                    />
                    <TextInput name="videoLink" source="videoLink" defaultValue={null} />
                    <TextInput name="imageLink" source="imageLink" defaultValue={null} />
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default NewsCreate;

