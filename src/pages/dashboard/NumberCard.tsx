import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {useTranslate} from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
    title: string;
}

const NumberCard = (props: Props) => {
    const {value, title} = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="#"
            icon={GroupAddIcon}
            title={translate(title)}
            subtitle={value}
        />
    );
};

export default NumberCard;
