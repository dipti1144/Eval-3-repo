import { Button, ButtonGroup, Card, CardBody,CardFooter,Divider,Heading,Image, Stack , Text} from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"
import { user } from '../pages'

function Profilecart(user) {
  return (
    <Card maxW="sm" m={"0px"} >
       <CardBody>
        <Link href={user.html_url} target="_blank" >
          <Image
          src={user.avatar_url}
          alt={user.login}
          borderRadius="lg"
          />
        </Link>
         <Stack mt="6" spacing="3" >
           <Link href={user.html_url} target="_blank" >
             <Heading size="md" >{user.login}</Heading>
           </Link>
           <Text>{user.bio}</Text>
           <Text>
            HTML | CSS | JAVASCRIPT | TYPESCRIPT | REACT.JS | NEXT.JS | GIT | CHAKRA-UI | MUI
           </Text>

         </Stack >
       </CardBody>
       <Divider/>
       <CardFooter>
        <ButtonGroup justifyContent={"space-between"} alignItems={"center"} w={"100%"} >
              <Button w={"40%"} variant="solid" colorScheme="green" >Resume</Button>
              <Button w={"40%"} variant="solid" colorScheme="blue">Follow</Button>
        </ButtonGroup>
       </CardFooter>
    </Card>
  )
}

export default Profilecart