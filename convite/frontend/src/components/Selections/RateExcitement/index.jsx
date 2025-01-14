import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Slider from "@mui/material/Slider";
import Heartstopper from "../../../public/assets/heatstopper.gif"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Heartstopper})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    minWidth: "100vw",
    position: "relative",
    paddingBottom: "4rem",
  },
  imagem: {
    width: "250px",
    borderRadius: "36px",
    marginBottom: "2rem",
  },
  titulo: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "1rem",
    color: "#C21D36",
  },
  animacaoTexto: {
    fontSize: "1.125rem",
    marginBottom: "0.5rem",
  },
  animacaoValor: {
    fontSize: "1.25rem",
    color: "#C21D36",
  },
  slider: {
    width: "100%",
    maxWidth: "20rem",
    marginBottom: "1.5rem",
  },
  sliderThumb: {
    backgroundColor: "#4A5568",
  },
  sliderRail: {
    backgroundColor: "#C21D36",
  },
  sliderTrack: {
    backgroundColor: "#9B2C2C",
  },
  sliderContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "20rem",
    marginBottom: "1.5rem",
  },
  sliderLabel: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#C21D36",
  },
  botaoWrapper: {
    paddingTop: "2rem",
  },
  botao: {
    fontWeight: "bold",
    borderRadius: "9999px",
    height: "50px",
    width: "320px",
    border: "1px solid #9B2C2C",
    backgroundColor: "white",
    color: "#9B2C2C",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    transition: "all 0.3s ease",
    overflow: "hidden",
    "&:hover": {
      color: "white",
      backgroundColor: "#9B2C2C",
      boxShadow: "0 4px 6px rgba(255, 0, 0, 0.2)",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      top: "0",
      zIndex: 0,
      height: "100%",
      width: "0",
      backgroundColor: "#9B2C2C",
      transition: "width 0.5s ease",
    },
    "&:hover:before": {
      width: "100%",
    },
  },
  textoBotao: {
    position: "relative",
    zIndex: 10,
  },
}));

const Index = () => {
  const classes = useStyles();
  const [animacao, setAnimacao] = useState(5);

  const handleSliderChange = (event, valor) => {
    localStorage.setItem("animação", valor);
    setAnimacao(valor);
  };

  return (
    <div className={classes.root}>
      <img
        src="https://i.chzbgr.com/full/9442666752/hEE1C0E84/cat"
        alt="excited cat"
        className={classes.imagem}
      />
      <h2 className={classes.titulo}>O quão animada você está?</h2>

      <span className={classes.animacaoTexto}>
        Nível de animação:{" "}
        <b className={classes.animacaoValor}>{animacao}</b>
      </span>

      <Slider
        value={animacao}
        onChange={handleSliderChange}
        aria-labelledby="animacao-slider"
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${value}`}
        min={1}
        max={10}
        step={1}
        className={classes.slider}
        sx={{
          "& .MuiSlider-thumb": {
            backgroundColor: "#4A5568",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#C21D36",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#9B2C2C",
          },
        }}
      />

      <div className={classes.sliderContainer}>
        <span className={classes.sliderLabel}>1</span>
        <span className={classes.sliderLabel}>10</span>
      </div>

      <div className={classes.botaoWrapper}>
        <Link to="/post-message">
          <button className={classes.botao}>
            <span className={classes.textoBotao}>Hora de finalizar! (＾-＾)</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;