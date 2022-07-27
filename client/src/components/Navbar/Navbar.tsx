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

const Navbar = () => {
  const classes = useStyles();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  if (user) localStorage.setItem("user", JSON.stringify(user));

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
                {isAuthenticated ? (
                  <Link
                    className={classes.menuLink}
                    onClick={() =>
                      logout({
                        returnTo: window.location.origin,
                      })
                    }
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
          <Grid item lg={1}>
            <Link className={`${classes.menuLink} ${classes.logo}`} href="/">
              Tour <span>bay</span>
            </Link>
          </Grid>
          <Grid
            item
            md={10}
            lg={11}
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
                {isAuthenticated ? (
                  <Link
                    className={classes.menuLink}
                    onClick={() =>
                      logout({
                        returnTo: window.location.origin,
                      })
                    }
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
