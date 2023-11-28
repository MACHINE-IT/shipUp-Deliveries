import PropTypes from 'prop-types';
import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './YoutubePopUpVideo.css';

const YoutubeEmbed = ({ embedId, onClose }) => (
    <Dialog open={true} onClose={onClose} maxWidth="lg" fullWidth>
        <div className="video-popup">
            <IconButton className="close-button" onClick={onClose} sx={{ position: 'absolute', top: '-10px', right: '50%', color: 'white' }}>
                <CloseIcon />
            </IconButton>
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    </Dialog>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default YoutubeEmbed;
