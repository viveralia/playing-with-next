import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  const { name, formik, helperText } = props;

  return (
    <TextField
      {...props}
      fullWidth
      variant="outlined"
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && formik.errors[name] && true}
      helperText={
        formik.touched[name] && formik.errors[name]
          ? formik.errors[name]
          : helperText
      }
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
};

export default Input;
