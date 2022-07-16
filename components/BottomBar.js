import { useState } from "react"
import { FormControl, Input, Button } from "@chakra-ui/react"
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseconfig";

export default function BottomBar({id, user}) {
    const [input, setInput] = useState("");
  
    const sendMessage = async (e) => {
      e.preventDefault();
      await addDoc(collection(db, `chats/${id}/messages`), {
        text: input,
        sender: user.email,
        timestamp: serverTimestamp()
      })
      setInput("");
    }
  
    return (
      <FormControl
        p={3}
        onSubmit={sendMessage}
        as="form"
      >
        <Input placeholder="Type a message..." boxShadow="sm" autoComplete="off" onChange={e => setInput(e.target.value)} value={input} />
        <Button type="submit" hidden>Submit</Button>
  
      </FormControl>
    )
}