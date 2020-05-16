import React, { useState } from "react";
import Head from "next/head";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

import AuthLayout from "../src/layouts/auth";
import Input from "../src/components/input";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "1.75rem",
  },
  button: {
    marginTop: "1rem",
  },
}));

const Home = () => {
  const classes = useStyles();

  const alertFormValues = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      countryCode: "52",
      tel: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Correo inválido").required("Correo requerido"),
      countryCode: Yup.number().required("Clave requerida"),
      tel: Yup.number().required("Teléfono requerido"),
      password: Yup.string()
        .min(8, "Mínimo 8 caracteres")
        .required("Contraseña requerida"),
      passwordConfirm: Yup.string()
        .min(8, "Mínimo 8 caracteres")
        .required("Contraseña requierida"),
    }),
    onSubmit: alertFormValues,
  });

  return (
    <AuthLayout
      img={{ src: "/assets/illustrations/register.svg", alt: "Illustration" }}
    >
      <Head>
        <title>Registro | PCard</title>
      </Head>
      <Typography variant="h1" className={classes.title}>
        Regístrate para obtener tu primer PCard
      </Typography>
      <Grid
        container
        spacing={2}
        component="form"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Grid item xs={12}>
          <Input
            formik={formik}
            label="Correo electrónico"
            name="email"
            type="email"
          />
        </Grid>
        <Grid item xs={4}>
          <Input formik={formik} label="Clave" name="countryCode" type="tel" />
        </Grid>
        <Grid item xs={8}>
          <Input
            formik={formik}
            label="Teléfono Celular"
            name="tel"
            type="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            formik={formik}
            label="Contraseña"
            name="password"
            type="password"
            helperText="Tu contraseña debe tener al menos 8 caracteres"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            formik={formik}
            label="Confirmar contraseña"
            name="passwordConfirm"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            className={classes.button}
          >
            Crear cuenta
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default Home;
