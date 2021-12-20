import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(4px)',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '80%',
      margin: 'auto',
      height: '80%',
    },
    video: {
      width: '100%',
      margin: 'auto',
      height: '50%',
    },
    contentText: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    blockBtn: {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
    },
    btn: {
      content: '\\2716',
      marginBottom: '10px',
    },
  }))
;


const ContentModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <div onClick={handleOpen}>
        {props.children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.blockBtn}><Button className={classes.btn} color={'inherit'}
                                                      onClick={handleClose}><span>&#10006;</span></Button></div>
            <iframe className={classes.video}
                    src={props.link[0] ? `https://www.youtube.com/embed/${props.link[0].key}` : 'https://www.youtube.com/watch?v=GNrdg3PzpJQ'}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            <Typography className={classes.contentText}>
              <h1>
                {props.data.title || props.data.name}
              </h1>
              <span>{props.data.vote_average}</span>
            </Typography>
            <Typography className={classes.paragraph}>
              {props.data.overview}
            </Typography>
            <Typography className={classes.contentText}>
              <h3>
                Дата выхода: {props.data.release_date}
              </h3>
              {/*<span>{props.data.vote_average}</span>*/}
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.fetchMovie,

  };
};
export default connect(mapStateToProps, {})(ContentModal);