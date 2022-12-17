import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10"></div>; }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;