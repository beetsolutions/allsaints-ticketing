import {Admin, Resource, CustomRoutes} from "react-admin";
import {Route} from 'react-router';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {Login, Layout, OtpPage} from './../components/layout';
import {Dashboard} from '../pages/dashboard/Dashboard';
import Configuration from './../pages/configuration/Configuration';

import {lightTheme} from '../components/layout/themes';
import {dataProvider, authProvider} from '../config/config';
import englishMessages from './../i18n/en';
import news from './../pages/tickets';
import Ticket from "../components/tickets/Ticket";
import Tickets from "../components/tickets/Tickets";

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./../i18n/fr')
            .then(messages => messages.default);
    }
    return englishMessages;
}, 'en');

const App = () => (
    <Admin
        title="All Saints Ticketing"
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={Login}
        layout={Layout}
        dashboard={Dashboard}
        i18nProvider={i18nProvider}
        disableTelemetry
        theme={lightTheme}
    >
        <CustomRoutes>
            <Route path="/configuration" element={<Configuration/>}/>
            <Route path="/configuration" element={<Configuration/>}/>
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/sold-tickets" element={<Tickets />} />
        </CustomRoutes>
        <Resource name="tickets" {...news} />
    </Admin>
);

export default App;


// import './App.css'
// import Routing from "./routes";
// import { BrowserRouter as Router } from "react-router-dom"
//
// function App() {
//     return (
//         <>
//             <Router basename={process.env.PUBLIC_URL}>
//                 <Routing/>
//             </Router>
//         </>
//     )
// }
//
// export default App
