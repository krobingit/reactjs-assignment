import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from '@mui/icons-material/Menu';

export default function CustomDrawer({direction}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
const subNavLinks=[
    {
      name: "Store",
      icon: null,
    },
    {
      name: "Account",
      icon: null,
    },
    { name: "Wishlist", icon: null },
    { name: "Basket", icon: <ShoppingBasketIcon /> },
  ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {subNavLinks.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
          <Button onClick={toggleDrawer(direction, true)}><MenuIcon /></Button>
          <Drawer
            anchor={direction}
            open={state[direction]}
            onClose={toggleDrawer(direction, false)}
          >
            {list(direction)}
          </Drawer>
    </div>
  );
}
