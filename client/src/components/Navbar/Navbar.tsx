// lib
import { useDispatch, useSelector } from "react-redux";

import {
  AppBar,
  Toolbar,
  Link,
  Grid,
  List,
  ListItem,
  useScrollTrigger,
} from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";
import { If, Else, Then } from "react-if";

// src
import { removeUser } from "../../store/user";
import { StateType } from "../../store/types";
import { LOGO } from "../../constants/staticUrls";

// styles
import { useStyles } from "./style";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loginWithRedirect, logout } = useAuth0();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const user = useSelector((state: StateType) => state.user);

  const logoutUser = () => {
    logout({
      returnTo: window.location.origin,
    });
    dispatch(removeUser(null));
  };

  return (
    <AppBar className={trigger ? classes.scrolledNavBar : classes.navStyled}>
      <Toolbar>
        <Grid container className={classes.navWrapper}>
          <NavMobile />
          <Grid item lg={2}>
            <Link className={`${classes.menuLink} ${classes.logo}`} href="/">
              <img src={LOGO} alt="tour bay logo" />
            </Link>
          </Grid>
          <Grid
            item
            md={10}
            lg={10}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <List className={classes.lisStyled}>
              <ListItem>
                <Link className={classes.menuLink} href="/">
                  Tours
                </Link>
              </ListItem>
              <ListItem>
                <Link className={classes.menuLink} href="/my-tours">
                  My Tours
                </Link>
              </ListItem>
              <ListItem>
                <If condition={user?.email}>
                  <Then>
                    <Link
                      className={classes.menuLink}
                      onClick={() => logoutUser()}
                    >
                      Log out
                    </Link>
                  </Then>
                  <Else>
                    <Link
                      className={classes.menuLink}
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </Link>
                  </Else>
                </If>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
