import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {useTranslate} from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const NewMembers = (props: Props) => {
    const {value} = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/commands"
            icon={GroupAddIcon}
            title={translate('pos.dashboard.new_customer')}
            subtitle={value}
        />
    );
};

export default NewMembers;