import PropTypes from 'prop-types';
import { Edit, Identifier, SimpleForm, TextInput, required } from 'react-admin';
import {RichTextInput, RichTextInputToolbar} from "ra-input-rich-text";

const NewsEditEmbedded = ({ id }: { id?: Identifier }) => (
    <Edit title=" " id={id}>
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

NewsEditEmbedded.propTypes = {
    record: PropTypes.object,
    resource: PropTypes.string,
    id: PropTypes.string,
};

export default NewsEditEmbedded;