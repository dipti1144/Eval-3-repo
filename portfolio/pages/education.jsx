import { Box } from '@chakra-ui/react'
import React from 'react'
import Educationcart from '../components/educationcart'
import {user} from "./index"
// console.log(user)

function Education() {
  return (
    
    <Educationcart {...user} />
    
  )
}

export default Education