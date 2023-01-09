import React from 'react'
import Link from "next/link"
import { Button, HStack, Spacer, Center, Avatar } from "@chakra-ui/react"

function Navbar() {
  return (
    <HStack bg="black" p={"10px 20px"} position={"static"} top={"0"} zIndex={"100"} >
       <HStack color="white" >
             <Button colorScheme={"blackAlpha"} >
                <Link href={"/"} >Deepti</Link>
             </Button>
             <Button colorScheme={"blackAlpha"} >
                <Link href={"/projects"} >Projects</Link>
             </Button>
             <Button colorScheme={"blackAlpha"} >
                <Link href={"/education"} >Education</Link>
             </Button>
       </HStack>
       <Spacer />

       <Center>
       <Link href={"https://github.com/dipti1144"} target="_blank" >
          <Avatar
          size={"sm"}
          src={"https://avatars.githubusercontent.com/u/105965074?v=4"}
          />
          </Link>
       </Center>

    </HStack>
  )
}

export default Navbar