import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const NavbarItemSubMenu = ({ menuListItem, anchorEl, handlePopoverOpen, handlePopoverClose }) => {
    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns="mouse-over-popover"
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {menuListItem}
            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{menuListItem}</Typography>
            </Popover>
        </div>
    );
};

export default NavbarItemSubMenu;
