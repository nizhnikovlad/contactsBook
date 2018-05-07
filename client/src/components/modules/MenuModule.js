import React from 'react';
import { Link } from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

class MenuModule extends React.Component {
    render() {
        return (
            <Menu>
                <Menu.Item as={Link} to='/'>
                    Контакты
            </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/login'>
                        Войти
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default MenuModule;
