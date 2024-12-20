import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import {useTranslate} from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
    title: string;
}

const MoneyCard = (props: Props) => {
    const {value, title} = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="#"
            icon={CurrencyPoundIcon}
            title={translate(title)}
            subtitle={value}
        />
    );
};

export default MoneyCard;