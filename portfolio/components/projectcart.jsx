import { Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link"

function Projectcart(projects) {
  return (
    <Stack w={"300px"} border={"1px solid gray"} p={"10px"} m={"5px"} >
        <Link href={projects.html_url} target="_blank" >
          <Heading fontSize={"20px"} >{projects.name}</Heading>
        </Link>
        <HStack>
        <Text>Forks: {projects.forks}</Text>
        <Text>Issues: {projects.open_issues}</Text>
        <Text>Language: {projects.Language}</Text>
        </HStack>
    </Stack>
  )
}

export default Projectcart