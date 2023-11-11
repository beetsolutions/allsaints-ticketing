import { TranslationMessages } from 'react-admin';
import englishMessages from 'ra-language-english';

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly revenue',
            new_customer: 'New members',
            budget: 'Budget',
            contributions: 'Contributions',
        },
    },
    resources: {
        tickets: {
            name: 'Ticket |||| Tickets',
            amount: '1 ticket |||| %{smart_count} tickets',
            detail: 'Ticket detail',
        }
    },
    tickets: {
        list: {
            search: 'Search',
        },
        form: {
            summary: 'Create a new ticket',
            security: 'Security',
        },
        action: {
            save_and_add: 'Save and Add',
            save_and_show: 'Save and Show',
        },
    },
};

export default customEnglishMessages;