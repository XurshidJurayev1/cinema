import React, { Suspense, lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/loader';
import AllProducts from '../../pages/All products';


const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const Registration = lazy(() => import('../../pages/Registration'));
const Profile = lazy(() => import('../../pages/Profile'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const PrivateRoute = lazy(() => import('../components/PrivateRoute'));
const GuestRoute = lazy(() => import('../components/GuestRoute'));

function Routes() {
  const auth = useAuth();

  return auth.isLoaded ? (
    <Suspense fallback={Loader}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/all-cinema">
          <AllProducts />
        </PrivateRoute>


        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <GuestRoute path="/registration">
          <Registration />
        </GuestRoute>


        <Route path="/not-found-404">
          <NotFound />
        </Route>
        <Redirect to="/not-found-404" />
      </Switch>
    </Suspense>
  ) : <Loader />;
}

export default Routes;
