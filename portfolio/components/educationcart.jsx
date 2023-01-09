import { Box, Heading, Stack , Text} from '@chakra-ui/react'
import React from 'react'
import Education from '../pages/education'

function Educationcart(user) {
  return (
    <Box w={"100%"} p={"10px"} >
        <Heading as={'h1'} >Education</Heading>
        <Stack>
            <Heading size={"md"} >Eduaction</Heading>
            <Text>{user.company}</Text>
            <Text>BA program : Delhi University</Text>
        </Stack>
    </Box>
  )
}

export default Educationcart