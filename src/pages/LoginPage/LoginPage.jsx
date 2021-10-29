import axios from "axios";
import { Formik } from 'formik';

//STYLES
import s from './LoginPage.module.sass'

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = '*campo obligatorio';
  }
  if (!values.password) {
    errors.password = '*campo obligatorio';
  } 
  return errors;
};



export default function LoginPage() {
  


  return (
    <div className={s.container}>
      <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        
        axios.post('http://challenge-react.alkemy.org/', {
          email: values.email,          //el mail correcto es: challenge@alkemy.org
          password: values.password     //el password correcto es: react
        })
        .then(res => {
          localStorage.setItem("token", res.data.token)
          window.location.href = '/team'
        })
        .catch(() => {
          actions.setFieldError("submitError", "El email y/o la contraseña ingresados no son válidos")
        })
        .finally(()=> {
          actions.setSubmitting(false);
        })

      }}

      >
      {props =>
        //el atributo noValidate desactiva la validación de HTML5 (ya que esto lo voy a manejar con Formik)
        <form className={s.form} onSubmit={props.handleSubmit} noValidate> 

          <div className={s.inputContainer}>
            <label htmlFor="email">Email address</label>
            <input className={s.formInput} type="email" id="email" {...props.getFieldProps('email')} />
            {props.touched.email && props.errors.email ? <div>{props.errors.email}</div> : null}
          </div>

          <div className={s.inputContainer}>
            <label htmlFor="password">Password</label>
            <input className={s.formInput} type="password" id="password" {...props.getFieldProps('password')} />
            {props.touched.password && props.errors.password ? <div>{props.errors.password}</div> : null}
          </div>
          <button className={s.submitButton} type="submit">Login</button>

          {props.errors.submitError? <div>{props.errors.submitError}</div> : null}

        </form>
      }
      </Formik>
    </div>
  )


}


