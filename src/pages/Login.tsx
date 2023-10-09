import React from 'react'

export const Login = () => {
  return (
    <div className="layout-login">
      <h1 className="login-title">Login</h1>
      <h2 className="login-subtitle">¡Bienvenido!</h2>

      <form className="form" action="">
        <div className="form-input">
          <label className="label" htmlFor="email">
            Correo electrónico de DaCodes
          </label>
          <input className="input" type="text" />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="email">
            Contraseña
          </label>
          <input className="input" type="password" />
        </div>
        <div className="form-input--checkbox">
          <input type="checkbox" className="checkbox" id="policy" />
          <label htmlFor="policy" className="checkbox-label">
            He leido y acepto los terminos y condiciones
          </label>
        </div>
        <input
          className="form-input--submit"
          type="submit"
          value="Crear cuenta"
        />
      </form>
    </div>
  )
}
