import {Edit, required, SimpleForm, TextInput} from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from 'ra-input-rich-text';

const NewsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput name="title" source="title" validate={[required()]}/>
            <TextInput name="author" source="author" validate={[required()]}/>
            <RichTextInput
                name="description"
                source="description" toolbar={<RichTextInputToolbar size="large"/>}
            />
            <RichTextInput
                name="content"
                source="content" toolbar={<RichTextInputToolbar size="large"/>}
            />
            <TextInput name="url" source="url" />
            <TextInput name="image" source="image" />
        </SimpleForm>
    </Edit>
);

export default NewsEdit;