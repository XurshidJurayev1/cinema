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
  centerToolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  rightToolbar: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
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
          {
            auth.user && <div className={classes.centerToolbar}>
              <Button color="inherit" component={Link} to="/all-cinema">
                Все кино
              </Button>
            </div>
          }
          {auth.isLoaded &&
          (auth.user ? (
            <>

              <Button color="inherit" component={Link} to="/profile">
                {auth.user.firstName} {auth.user.lastName}
              </Button>
              <Button color="inherit" onClick={onLogOut}>
                Выйти
              </Button>
            </>
          ) : (
            <div className={classes.rightToolbar}>
              <Button color="inherit" component={Link} to="/login">
                Авторизоваться
              </Button>
              <Button color="inherit" component={Link} to="/registration">
                Регистрация
              </Button>
            </div>
          ))}
        </Toolbar>
      </AppBar>


    </div>
  );
}

export default Header;