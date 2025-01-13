import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import AboutTime from "../../../public/assets/about-time.webp";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${AboutTime})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'relative',
    textAlign: 'center',
  },
  header: {
    marginBottom: '1rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#9B2C2C',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#9B2C2C',
    fontWeight: '500'
  },
  dateInput: {
    padding: '1rem',
    border: '1px solid #9B2C2C',
    borderRadius: '4px',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  buttonWrapper: {
    paddingTop: '1rem',
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
  error: {
    color: 'red',
    fontSize: '0.875rem',
  }
}));

const validationSchema = Yup.object({
  dataSelecionada: Yup.date().required("Por favor, escolha uma data!").nullable(),
});

const Index = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem("dataSelecionada", values.dataSelecionada);

    navigate("/select-date-type");
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1 className={classes.title}>Quando você está livre?</h1>
        <p className={classes.subtitle}>Escolha a data que ficar melhor!!</p>
      </header>

      <Formik
        initialValues={{ dataSelecionada: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isValid }) => (
          <Form>
            <div>
              <Field
                name="dataSelecionada"
                type="date"
                className={classes.dateInput}
                required
                onChange={(e) => setFieldValue("dataSelecionada", e.target.value)}
              />
              <ErrorMessage name="dataSelecionada" component="div" className={classes.error} />
            </div>

            <div className={classes.buttonWrapper}>
              <button
                className={classes.button}
                type="submit"
                disabled={!isValid}
              >
                <span className={classes.buttonText}>É essa a data! (＾-＾)</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Index;