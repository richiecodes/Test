import Sidebar from "../../components/Sidebar"
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Avatar } from "@chakra-ui/react"
import { Input } from "@chakra-ui/input"
import { FormControl } from "@chakra-ui/form-control"
import { Button } from '@chakra-ui/button'
import Head from "next/head"
import { useAuthState } from 'react-firebase-hooks/auth';

const TopBar = () => {
  return (
    <Flex
      bg="gray.100"
      h="81px" w="100%"
      align="center"
      p={5}
    >
      <Avatar src="" marginEnd={3}/>
      <Heading size="lg">Person's Name</Heading>
    </Flex>
  )
}

const BottomBar = () => {
  return (
    <FormControl
      p={3}
    >
      <Input placeholder="Type a message..." boxShadow="sm" autoComplete="off"/>
      <Button type="submit" hidden />

    </FormControl>
  )
}

export default function Chat() {
  return (

    <Flex
    h="100vh"
    >

      <Head>
        <title>Chat App</title>
      </Head>

      <Sidebar />

      <Flex
        flex={1}
        direction="column"
      >
        
        <TopBar />

        <Flex flex={1} direction="column" p={4} mx={5} overflowX="scroll" sx={{'::-webkit-scrollbar': {display:'none'}}}>

          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This is a dummy message</Text>
          </Flex>
          <Flex bg="blue.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg">
            <Text>This too</Text>
          </Flex>
          <Flex bg="green.100" w="fit-content" minW="100px" borderRadius="lg" p={3} m={1} boxShadow="lg" alignSelf="flex-end">
            <Text>This is a dummy message This is a dummy message This is a dummy message</Text>
          </Flex>
          

        </Flex>

        <BottomBar />

      </Flex>

    </Flex>

  )
}