import { Box, Heading, Stack , Text} from '@chakra-ui/react'
import React from 'react'
import Education from '../pages/education'

function Educationcart(user) {
  return (
    <Box w={"40%"} p={"10px"}  >
        <Heading as={'h1'} >Education</Heading>
        <Stack mt="10px" border={"1px solid gray"} >
            <Heading size={"md"}  >Eduaction</Heading>
            <Text>FullStack web developer : {user.company}</Text>
            <Text>BA program : Delhi University</Text>
        </Stack>
    </Box>
  )
}

export default Educationcart