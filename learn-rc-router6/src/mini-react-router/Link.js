import React from 'react'
import { useNavigate } from './hooks';

export default function Link({ to, children, ...rest }) {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>{children}</a>
  )
}
