import React, { useState } from "react";
import hamsterIMG from "../../public/assets/hamster.jpg";
import invite from "../../public/assets/invite.jpg";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${invite})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '800',
    color: '#f646a5',
  },
  containerBotao: {
    padding: '4rem 0',
  },
  botaoSim: {
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
  botaoNao: {
    backgroundColor: '#242424',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.375rem',
    position: 'absolute',
    display: 'inline-block',
    fontWeight: 'bold',
    borderRadius: '9999px',
    height: '50px',
    width: '320px',
  },
  hamsterImage: {
    width: '250px',
    borderRadius: '15px',
  },
}));

const HomePage = () => {
  const [botaoNaoEstilo, setBotaoNaoEstilo] = useState({});

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setBotaoNaoEstilo({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  const classes = useStyles();

  const startStorage = () => {
    localStorage.clear()
  }

  return (
    <main className={classes.root}>
      <div>
        <img src={hamsterIMG} alt="Hamster Meme" className={classes.hamsterImage} />
      </div>
      <h1 className={classes.titulo}>
        Manu, aceita sair num date comigo?
      </h1>
      <div className={classes.containerBotao}>
        <Link to="/happy-page">
          <button className={classes.botaoSim} onClick={startStorage}>
            <span className={classes.textoBotao}>Sim</span>
          </button>
        </Link>
        <button
          className={classes.botaoNao}
          style={botaoNaoEstilo}
          onMouseEnter={handleNoHover}
        >
          Não
        </button>
      </div>
    </main>
  );
}

export default HomePage;