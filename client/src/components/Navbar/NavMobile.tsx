// lib
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Link, Menu, MenuItem } from "@mui/material";

// src
import { StateType } from "../../store/types";
import { removeUser } from "../../store/user";

// styles
import { useStyles } from "./style";

export const NavMobile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loginWithRedirect, logout } = useAuth0();
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);

  const user = useSelector((state: StateType) => state.user);

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
            <Link className={classes.menuLink} onClick={() => logoutUser()}>
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
  );
};

export default NavMobile;
