import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Sakuragi from '../../public/assets/sakuragi-hanamichi.gif'
import BeforeSunrise from '../../public/assets/before-sunrise.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BeforeSunrise})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '800',
    color: 'white',
  },
  subtitle: {
    fontStyle: 'italic',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '1.125rem',
    color: 'white',
  },
  gif: {
    borderRadius: '18px',
    width: '30vw',
    height: '30vh'
  }
}));

const PostMessage = () => {
  const classes = useStyles();

  const dataSelecionada = localStorage.getItem("dataSelecionada");
  const selectedType = localStorage.getItem("tipo de date");
  const animacao = localStorage.getItem("animação");

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataSelecionada, selectedType, animacao }),
      });
      const data = await response.json();
      console.log('Resposta do servidor:', data);
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };

  useEffect(() => {
    if (dataSelecionada && selectedType && animacao) {
      sendEmail();
    }
  }, [dataSelecionada, selectedType, animacao]);

  return (
    <div className={classes.root}>
      <div>
        <img src={Sakuragi} alt="Sakuragi gif" className={classes.gif} />
      </div>
      <h1 className={classes.title}>
        {dataSelecionada && <p>Data escolhida: {dataSelecionada}</p>}
        {selectedType && <p>Date preferido: {selectedType}</p>}
        {animacao && <p>Animação: {animacao}</p>}
      </h1>
      <h2 className={classes.subtitle}>
        Não vejo a hora!!
      </h2>
    </div>
  );
};

export default PostMessage;