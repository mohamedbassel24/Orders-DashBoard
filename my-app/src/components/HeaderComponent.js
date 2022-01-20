import * as React from "react";
import { Route , Link} from 'react-router-dom';
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NoEncryption } from "@mui/icons-material";

export default function Header() {
return (
	<AppBar position="static">
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
		
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			   <Link to="/" style={{ textDecoration: 'none' , color:'white'}}>
               Orders Dashboard
               </Link>
		</Typography>
        <Link to="/stats" style={{ textDecoration: 'none' , color:'white'}}>
		<Button color="inherit">
            Statistics
        
        </Button>
        </Link>
		</Toolbar>
	</AppBar>
);
}
