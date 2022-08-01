// lib
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Grid,
  List,
  ListItem,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";

// src
import { useStyles } from "./NavbarStyled.style";
import { LOGO } from "../../constants/staticUrls";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../store/types";
import { removeUser } from "../../store/user";

const Navbar = () => {
  const classes = useStyles();
  const { loginWithRedirect, logout } = useAuth0();
  const user = useSelector((state: StateType) => state.user);
  const dispatch = useDispatch();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [mobileMenu, setMobileMenu] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setMobileMenu(null);
  };

  const logoutUser = () => {
    dispatch(removeUser(null));
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <AppBar className={trigger ? classes.scrolledNavBar : classes.navStyled}>
      <Toolbar>
        <Grid container className={classes.navWrapper}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenu}
              open={Boolean(mobileMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link className={classes.menuLink} href="/">
                  Tours
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={classes.menuLink} href="/my-tours">
                  My Tours
                </Link>
              </MenuItem>
              <MenuItem>
                {user ? (
                  <Link
                    className={classes.menuLink}
                    onClick={() => logoutUser()}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    className={classes.menuLink}
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </Link>
                )}
              </MenuItem>
            </Menu>
          </Box>
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
                {user ? (
                  <Link
                    className={classes.menuLink}
                    onClick={() => logoutUser()}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    className={classes.menuLink}
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </Link>
                )}
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
