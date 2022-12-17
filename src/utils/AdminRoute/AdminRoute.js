import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) { return <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10"></div>; }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;