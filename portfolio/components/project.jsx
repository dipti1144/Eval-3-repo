import { Grid, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Projectcart from './projectcart'

function Project(projects) {
  return (
    <VStack w={"100%"}  p={"10px"} >
        <Heading as={"h1"}>Projects</Heading>
        <Grid templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
        }}  >
            {
                projects?.items?.map((item)=><Projectcart key={item.id} {...item} />)
            }
        </Grid>
    </VStack>
  )
}

export default Project