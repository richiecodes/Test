import Head from 'next/head';
import { ChatIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Stack } from '@chakra-ui/react';
import { auth } from '../firebaseconfig'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>

      <Head>
        <title>Login</title>
      </Head>

      <Center
        h="100vh"
      >

        <Stack
          align="center"
          bgColor="gray.600"
          p={16}
          rounded="3xl"
          spacing={12}
          boxShadow="2xl"
        >
          <h1 style={{color:"white", fontSize: "4rem", fontWeight:"bold"}}>Rochoe's Chat</h1>

          <Box
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            w="fit-content"
            p={5}
            rounded="3xl"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>

          <Button boxShadow="md" onClick={() => signInWithGoogle("", {prompt: "select_account"})}>Sign in with Google</Button>
          
        </Stack>

      </Center>
    
    </>
  )
}