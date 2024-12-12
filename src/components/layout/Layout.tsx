import { Layout, LayoutProps } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';

const layout = (props: LayoutProps) => {
    return  (<>
        <Layout {...props} appBar={AppBar} menu={Menu} />
    </>)
};
export default layout;
