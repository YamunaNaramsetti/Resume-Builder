import { Button, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    
    <VStack marginBottom={9} alignContent={'center'}>
      <Text fontStyle={'oblique'} fontSize={'1cm'}>
      Online Resume Builder.</Text>
      
      <Text fontWeight={'bold'}>Free to use</Text>
      
      <Link to={'/template'}>
      <Button bg="violet" color="white" borderRadius={10} borderWidth={0} height={30}>Create my Resume Now</Button>
      </Link>
    </VStack>
    
  )
}

export default Home