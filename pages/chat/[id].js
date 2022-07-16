import Sidebar from "../../components/Sidebar"
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Avatar } from "@chakra-ui/react"
import { Input } from "@chakra-ui/input"
import { FormControl } from "@chakra-ui/form-control"
import { Button } from '@chakra-ui/button'
import Head from "next/head"
import { useRouter } from 'next/router'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { query, orderBy, collection, doc, addDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from "../../firebaseconfig"
import { useAuthState } from 'react-firebase-hooks/auth'
import getOtherEmail from "../../utils/getOtherEmail"

import TopBar from '../../components/TopBar'
import BottomBar from '../../components/BottomBar'
import { useRef, useEffect } from "react"

export default function Chat() {
  const router = useRouter();
  const { id } = router.query;
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [user] = useAuthState(auth)

  const [messages] = useCollectionData(q);

  const [chat] = useDocumentData(doc(db, "chats", id))

  const bottomOfChat = useRef();

  const getMessages = () => 
    messages?.map(msg => {
      const sender = msg.sender === user.email
      return (
        <Flex key={Math.random()} alignSelf={sender ? "flex-end" : "flex-start"} bg={sender ? "green.100" : "blue.100"} w="fit-content" minWidth="100px" borderRadius="lg" p={3} m={1}>
          <Text>{msg.text}</Text>
        </Flex>
      ) 
    })

  useEffect(() => {
    setTimeout(
      bottomOfChat.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }), 100)}, [messages])
  

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
        
        <TopBar email={getOtherEmail(chat?.users, user)} />

          <Flex flex={1} direction="column" p={4} mx={5} overflowX="scroll" sx={{'::-webkit-scrollbar': {display:'none'}}}>
            {getMessages()} 
            <div ref={bottomOfChat}>

            </div>
          </Flex>

        <BottomBar id={id} user={user} />

      </Flex>

    </Flex>

  )
}