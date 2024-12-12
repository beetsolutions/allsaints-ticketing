import PeopleIcon from '@mui/icons-material/People';
import TicketsCreate from './TicketsCreate';
import TicketsEdit from './TicketsEdit';
import TicketsList from './TicketsList';
import TicketsShow from './TicketsShow';

const tickets = {
    list: TicketsList,
    create: TicketsCreate,
    edit: TicketsEdit,
    show: TicketsShow,
    icon: PeopleIcon,
};
export default tickets;
