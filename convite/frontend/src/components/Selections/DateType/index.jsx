import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ChungkingExpress from "../../../public/assets/chungking-express.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${ChungkingExpress})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "95vh",
    minWidth: "100vw",
    position: "relative",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "3rem",
    color: "#C21D36",
  },
  carouselContainer: {
    display: "flex",
    overflowX: "auto",
    gap: "2rem",
    paddingBottom: "2rem",
    paddingTop: "1rem",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItem: {
    backgroundColor: "#600B04",
    flex: "none",
    width: "250px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  selectedItem: {
    border: "2px solid #C21D36",
    backgroundColor: "#420C09",
  },
  itemImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemName: {
    marginTop: "1rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#C21D36",
  },
  buttonWrapper: {
    paddingTop: "4rem",
  },
  button: {
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
  buttonText: {
    position: 'relative',
    zIndex: 10,
  },
}));

const dates = [
  {
    name: "Cinema",
    img: "https://i0.wp.com/borg.com/wp-content/uploads/2017/08/michael-jackson-thriller.jpg",
  },
  {
    name: "Praia",
    img: "https://i.ytimg.com/vi/J7RTqHNzjBo/maxresdefault.jpg",
  },
  {
    name: "Piquenique",
    img: "https://cdn.awsli.com.br/600x450/2009/2009139/produto/234643875/whatsapp-image-2023-09-23-at-10-16-51--1--59buwp3ddr.jpeg",
  },
];

const Index = () => {
  const classes = useStyles();
  const [selectedType, setSelectedType] = useState("");

  const handleSelection = (type) => {
    localStorage.setItem("tipo de date", type);
    setSelectedType(type);
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Que tipo de date você prefere?</h2>
      <div className={classes.carouselContainer}>
        {dates.map((date) => (
          <div
            key={date.name}
            className={`${classes.carouselItem} ${
              selectedType === date.name ? classes.selectedItem : ""
            }`}
            onClick={() => handleSelection(date.name)}
          >
            <img src={date.img} alt={date.name} className={classes.itemImage} />
            <div className={classes.itemName}>{date.name}</div>
          </div>
        ))}
      </div>
      <div className={classes.buttonWrapper}>
        <Link to="/animacao">
          <button className={classes.button}>
            <span className={classes.buttonText}>Bora lá!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;