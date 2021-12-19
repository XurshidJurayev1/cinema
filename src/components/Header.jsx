import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
} from '@material-ui/core';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const onLogOut = () => {
    auth.logOut();
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Cinema app
          </Button>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/all-products">
              All cinema
            </Button>
          </div>
          {auth.isLoaded &&
          (auth.user ? (
            <>
              <Button color="inherit" component={Link} to="/profile">
                {auth.user.firstName} {auth.user.lastName}
              </Button>
              <Button color="inherit" onClick={onLogOut}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/registration">
                Registration
              </Button>
            </>
          ))}
        </Toolbar>
      </AppBar>


    </div>
  );
}

export default Header;