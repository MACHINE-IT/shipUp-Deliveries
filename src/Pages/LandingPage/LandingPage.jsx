import { useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Button, Stack, Box, TextField, InputAdornment } from "@mui/material";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import girlOnScooterSVG from "../../assets/girlOnScooter.svg";
import VideoCam from "../../assets/VideoCam.svg";
import Location from "../../assets/Location.jsx";
import './LandingPage.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import YoutubeEmbed from "../../Components/YoutubePopUpVideo/YoutubePopUpVideo.jsx";

const LandingPage = () => {
    const [showVideoPopup, setShowVideoPopup] = useState(false);

    const handleVideoClick = () => {
        setShowVideoPopup(true);
    };

    const closeVideoPopup = () => {
        setShowVideoPopup(false);
    };
    return (
        <div>
            <Navbar />
            <div className="landingPageContent">
                <div className="landingPageInfo">
                    <Stack className="landingPageLeftSide" direction="column" spacing={4} justifyContent="center" alignItem="center">
                        <div className="provisQuote">
                            <span className="bold-black-typography">Quick & Reliable</span> <span className="bold-orange-typography">Warehousing
                                and</span> <span className="bold-black-typography">Logistics Solution.</span>
                        </div>
                        <div className="provisQuoteDetail">
                            ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged
                            people working in an agile culture, and a global footprint
                        </div>
                        <Stack className="joinNowAndPlayDemoSection" direction="row" spacing={4} alignItems="center">
                            <Button className="joinNow contained-button" variant="contained">Join Now</Button>
                            <img className="playDemoIcon" src={VideoCam} alt="play demo" onClick={handleVideoClick} />
                            <div className="playDemo">
                                Play Demo
                            </div>
                        </Stack>
                    </Stack>
                    <div className="girlOnScooterSVG">
                        <img src={girlOnScooterSVG} alt="girl sitting on scooter" />
                    </div>
                </div>
                {showVideoPopup && <YoutubeEmbed embedId="RD-b72PLH1A" onClose={closeVideoPopup} />}
                <Box sx={{ boxShadow: 3 }} className="checkPriceCard card-Outline-radius">
                    <div className="priceChecking">
                        <TextField
                            label="Origin"
                            id="outlined-start-adornment-origin"
                            className="border-Outline-radius"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Location /> Enter Location</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Destination"
                            id="outlined-start-adornment-destination"
                            className="border-Outline-radius"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Location /> Enter Location</InputAdornment>,
                            }}
                        />
                        <TextField
                            label="Weight"
                            id="outlined-start-adornment-weight"
                            className="border-Outline-radius"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><ShoppingBagIcon /> Enter Location</InputAdornment>,
                            }}
                        />
                        <Button className="checkPrice contained-button" variant="contained">Check Price</Button>
                    </div>
                </Box>
            </div>
            <Footer />
        </div >
    )
}

export default LandingPage