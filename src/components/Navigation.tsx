import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes/routes';
import NavStyled from './NavStyled';

const Navigation: React.FC = () => {
    return (
        <>
            <NavStyled><span style={{marginRight: '50px', marginLeft: '15px', fontSize: '26px'}}>Navbar</span>
            {routes.map(item => {
                return (
                    <>
                        <Link to={item.url}>{item.label}</Link>
                        <br />
                    </>
                );
            })} </NavStyled>
        </>
    );
};

export default Navigation;
