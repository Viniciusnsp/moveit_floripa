import React from 'react'

import { MyInput } from './styles';

export function Input({...props}) {
  return (
    <MyInput
    {...props}
    />
  )
}