import { Grid, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Projectcart from '../components/projectcart'

function Projects({projects}) {
  return (
    <VStack w={"100%"}  p={"10px"} >
        <Heading as={"h1"}>Projects</Heading>
        <Grid templateColumns={{
            base: "repeat(1, 1fr)",
            ms: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
        }}  >
            {
                projects?.items?.map((item)=><Projectcart key={item.id} {...item} />)
            }
        </Grid>
    </VStack>
  )
}

export default Projects

export const getServerSideProps=async()=>{
    let res= await fetch(`https://api.github.com/search/repositories?q=user:dipti1144+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data= await res.json();

    return {
        props:{
            projects:data
        }
    }
}