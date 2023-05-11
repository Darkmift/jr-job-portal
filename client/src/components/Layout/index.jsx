import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Outlet } from 'react-router-dom';

function index(props) {
    return (
        <>
            <AppHeader />
            {/* so small page still fill the remaining screen between heqad and footer */}
            <Outlet />
            <AppFooter />
        </>
    );
}

index.propTypes = {};

export default index;
