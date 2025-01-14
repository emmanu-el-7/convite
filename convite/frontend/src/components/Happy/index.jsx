import React, { useEffect } from "react";
import HappyCatGIF from "../../public/assets/smile-cat.gif";
import SingingRain from "../../public/assets/singing-in-the-rain.gif";
import confetti from "canvas-confetti";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${SingingRain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catImage: {
    height: '280px',
    objectFit: 'contain',
    paddingBottom: '2rem',
  },
  header: {
    textAlign: 'center',
  },
  titulo: {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'white',
  },
  legenda: {
    fontStyle: 'italic',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '1.125rem',
    color: 'white',
  },
  botao: {
    display: 'inline-block',
    fontWeight: 'bold',
    borderRadius: '9999px',
    height: '50px',
    width: '320px',
    border: '1px solid #9B2C2C',
    backgroundColor: 'white',
    color: '#9B2C2C',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      color: 'white',
      backgroundColor: '#9B2C2C',
      boxShadow: '0 4px 6px rgba(255, 0, 0, 0.2)',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      top: '0',
      zIndex: 0,
      height: '100%',
      width: '0',
      backgroundColor: '#9B2C2C',
      transition: 'width 0.5s ease',
    },
    '&:hover:before': {
      width: '100%',
    },
  },
  textoBotao: {
    position: 'relative',
    zIndex: 10,
  },
}));

function Index() {
  const classes = useStyles();

  useEffect(() => {
    confetti({
      particleCount: 2000,
      spread: 200,
      origin: { y: 0.6 },
      shapes: ["heart"],
      colors: ["#ff69b4", "#ff1493", "#ff00ff", "#ff6347", "#ff4500"],
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.catImageWrapper}>
        <img
          src={HappyCatGIF}
          alt="Happy Cat"
          className={classes.catImage}
        />
      </div>
      <header className={classes.header}>
        <h1 className={classes.titulo}>Obaaaa!</h1>
        <p className={classes.legenda}>Não saia ainda :)</p>
      </header>
      <Link to="/selecionar-data">
        <button className={classes.botao}>
          <span className={classes.textoBotao}>Siga em frente (づ ◕‿◕ )づ</span>
        </button>
      </Link>
    </div>
  );
}

export default Index;