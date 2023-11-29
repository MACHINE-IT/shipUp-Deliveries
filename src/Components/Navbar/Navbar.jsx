import { useState } from 'react';
import ShipUpSVG from "../../assets/ShipUp";
import { Button, Stack } from "@mui/material";
import './Navbar.css'
import NavbarItemSubMenu from '../NavbarItemSubMenu/NavbarItemSubMenu';

const Navbar = () => {
    const requestQuoteButtonHandler = () => {

    }

    const joinNowButtonHandler = () => {

    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className="navbar" >
            <Stack className="nav-items" direction="row" spacing={4} alignItems="center">
                <div className="header-title">
                    <ShipUpSVG />
                </div>
                <div className="companyLi nav-items-li">
                    <NavbarItemSubMenu menuListItem="Company" anchorEl={anchorEl} handlePopoverOpen={handlePopoverOpen} handlePopoverClose={handlePopoverClose} />
                    {/* <NavbarItemSubMenu menuList="Company" /> */}
                </div>
                <div className="servicesLi nav-items-li">
                    Services
                </div>
                <div className="solutionsLi nav-items-li">
                    Solutions
                </div>
                <div className="industriesLi nav-items-li">
                    Industries
                </div>
                <div className="insightsLi nav-items-li">
                    Insights
                </div>
                <div className="news&MediaLi nav-items-li">
                    News And Media
                </div>

                <div className="nav-actions">
                    {/* Action buttons */}
                    <Button variant="outlined" className="button outlined-button" onClick={requestQuoteButtonHandler}>Request Quote</Button>
                    <Button variant="contained" className="button contained-button" onClick={joinNowButtonHandler}>Join Now</Button>
                </div>
            </Stack>
        </div>
    )
}

export default Navbar