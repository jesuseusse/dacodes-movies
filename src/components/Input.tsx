import React from 'react'

interface Props {
  label: string
  name: string
  type: 'text' | 'password'
}

export const Input = ({ label, type, name }: Props) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} />
    </>
  )
}
