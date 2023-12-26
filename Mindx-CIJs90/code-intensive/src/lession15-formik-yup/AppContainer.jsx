import { useFormik } from "formik";
import * as yup from "yup";
import './index.css';

const signupFormValidationScheme = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Email does not valid format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AppContainer = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submit values:", values);
      alert("Signup successfully");
      resetForm({
        fullname: "",
        email: "",
        password: "",
      });
    },
    validationSchema: signupFormValidationScheme,
  });

  const { handleSubmit, values, handleChange, errors, resetForm } = formik;

  return (
    <div className="signup-wrapper">
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <div className="form-control">
          <label htmlFor="fullname">Fullname</label>
          <input
            id="fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
        </div>
        {errors.fullname && (
            <p className="error-message">{errors.fullname}</p>
          )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default AppContainer;
