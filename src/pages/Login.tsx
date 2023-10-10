import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useGetSession } from '../hooks/useGetSession'

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(7),
    policy: yup.boolean().isTrue().required()
  })
  .required()

type LoginForm = yup.InferType<typeof schema>

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: yupResolver(schema)
  })

  const { loading, getSession, sessionId, error } = useGetSession()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    getSession()
  }

  useEffect(() => {
    if (!!sessionId) navigate('/')
  }, [sessionId])

  return (
    <div className="layout-login">
      <h1 className="login-title">Login</h1>
      <h2 className="login-subtitle">¡Bienvenido!</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {error && <span className="form-error">{error}</span>}
        <div className="form-input">
          <label className="label" htmlFor="email">
            Correo electrónico de DaCodes
          </label>
          {errors.email?.type === 'required' && (
            <span className="form-error">Ingrese su correo electrónico</span>
          )}
          {errors.email?.type === 'email' && (
            <span className="form-error">Correo electrónico no válido</span>
          )}
          <input
            disabled={loading}
            className="input"
            type="text"
            defaultValue=""
            {...register('email', { required: true })}
          />
        </div>
        <div className="form-input">
          <label className="label" htmlFor="email">
            Contraseña
          </label>
          {errors.password?.type === 'required' && (
            <span className="form-error">Ingrese su constraseña</span>
          )}
          {errors.password?.type === 'min' && (
            <span className="form-error">
              Debe contener al menos 7 caractéres
            </span>
          )}
          <input
            disabled={loading}
            className="input"
            type="password"
            defaultValue=""
            {...register('password', { required: true, minLength: 7 })}
          />
        </div>
        <div className="form-input--checkbox">
          {errors.policy && (
            <span className="form-error">
              Debe aceptar los términos y condiciones
            </span>
          )}
          <input
            disabled={loading}
            type="checkbox"
            className="checkbox"
            id="policy"
            {...register('policy')}
          />
          <label htmlFor="policy" className="checkbox-label">
            He leido y acepto los terminos y condiciones
          </label>
        </div>
        <input
          disabled={loading}
          className="form-input--submit"
          type="submit"
          value={loading ? 'Espere...' : 'Crear cuenta'}
        />
      </form>
    </div>
  )
}
