import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { auth } from "../wrapper/authWrapper";
import { NavLink } from "react-router-dom";
// import {
//   PaddingOutlined,
//   PaddingRounded,

// } from "@mui/icons-material";

// const {isUserLoggedIn, setIsUserLoggedIn} = auth();
function ResponsiveAppBar() {
  const { isUserLoggedIn } = auth();
  const settings = [
    {
      label: "Profile",
      link: "/profile",
    },
    {
      label: "Settings",
      link: "/settings",
    },
    {
      label: "Logout",
      link: "/",
    },
  ];
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const pages = [
    {
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      label: "Register",
      link: "/register",
    },

    ...(!isUserLoggedIn
      ? [
          {
            label: "Register",
            link: "/register",
          },
        ]
      : [
          {
            label: "My Board",
            link: "register",
          },
        ]),
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      position="static"
      style={{
        width: "100vw",
        height: "80px",
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgb(228, 194, 156)",
        WebkitMaskImage: `linear-gradient(to bottom,
        rgba(0, 0, 0, 1) 70%,   /* Fully visible from top to 70% of height */
        rgba(0, 0, 0, 0.5) 85%, /* Starts fading at 85% of height (semi-transparent) */
        rgba(0, 0, 0, 0) 100%   /* Fully transparent at the bottom (100%) */)`,
        maskImage: `linear-gradient(to bottom, 
        rgba(0, 0, 0, 1) 70%,   /* Fully visible from top to 70% of height */
        rgba(0, 0, 0, 0.5) 85%, /* Starts fading at 85% of height (semi-transparent) */
        rgba(0, 0, 0, 0) 100%   /* Fully transparent at the bottom (100%) */)`,
        position: "sticky",
        top: 0,
        // left:0,
        // right:0,
        zIndex: 3,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          {/* //wide screen */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              //   mr: 2,
              padding: "2px",
              display: { xs: "none", md: "flex" },
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "bold",
              letterSpacing: ".5rem",
              color: "pink !important",
              WebkitTextStroke: "1.5px brown",
              textDecoration: "none",
              fontSize: "2.3rem",
            }}
          >
            VibeScape
          </Typography>

          {/* //phone */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "bold",
              letterSpacing: ".3rem",
              color: "pink !important",
              WebkitTextStroke: "1.3px brown",
              textDecoration: "none",
              fontSize: "2rem",
            }}
          >
            VibeScape
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            {/* //mapping of the navs for phone */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <NavLink
                    to={`${page.link}`}
                    key={page.label}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      sx={{
                        color: "rgb(102, 32, 4)",
                        padding: "5px",
                        paddingInline: "25px",
                        textAlign: "center",
                        // color: "black",
                        // fontWeight:"bold",
                        backgroundColor: "rgb(255, 235, 232)",
                        fontFamily: `'Sour Gummy', sans-serif`,
                      }}
                    >
                      {page.label}
                    </Typography>
                  </NavLink>
                ))}
              </Menu>
            </Box>

            {/* mapping of nav for widescreen */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "30px",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  to={page.link}
                  key={page.label}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: "underline",
                          textDecorationColor: "black",
                          textUnderlinePosition: "under",
                        }
                      : undefined
                  }
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{
                      color: "rgb(102, 32, 4)",
                      // fontWeight:"bold",
                      fontFamily: `'Sour Gummy', sans-serif`,
                      fontSize: 17,
                      ":hover": {
                        transition: "all 0.2s ease-in-out",
                        transform: "scale(1.05)",
                        textDecoration: "underline",
                        textDecorationColor: "rgb(143, 47, 10) !important",
                      },
                    }}
                  >
                    {page.label}
                  </Typography>
                </NavLink>
              ))}
            </Box>
            {/* //avatar */}
            {isUserLoggedIn && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profile & settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: "rgb(216, 114, 55)" }}>N</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default ResponsiveAppBar;
