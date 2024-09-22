'use client'
import { ReactNode, createContext, useRef, useState } from 'react'
import { useToast } from '@/hooks/use-toast'

// Define a type for message objects
type Message = {
    id: string
    text: string
    isUserMessage: boolean
    createdAt: string
  }
  
  type StreamResponse = {
    addMessage: () => void
    message: string
    handleInputChange: (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => void
    isLoading: boolean,
    messages: Message[]
  }
  
  // Update the ChatContext to expect message objects
  export const ChatContext = createContext<StreamResponse>({
    addMessage: () => {},
    message: '',
    handleInputChange: () => {},
    isLoading: false,
    messages: []
  })
  
  interface Props {
    fileId:number
    children: ReactNode
  }
  
  export const ChatContextProvider = ({fileId, children }: Props) => {
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [messages, setMessages] = useState<Message[]>([])
  
    const backupMessage = useRef('')
  
    const { toast } = useToast()
  
    const addMessage = () => {
      if (!message.trim()) {
        toast({
          title: 'Message is empty',
          description: 'Please enter a valid message',
          variant: 'destructive',
        })
        return
      }
  
      backupMessage.current = message
  
      // Add user message to the list
      setMessages((prevMessages) => [
        {
          id: crypto.randomUUID(),
          text: message,
          isUserMessage: true,
          createdAt: new Date().toISOString(),
        },
        ...prevMessages,
      ])
  
      setMessage('')
      setIsLoading(true)
  
      // Simulate response delay
      setTimeout(() => {
        const aiResponse: Message = {
          id: 'ai-response',
          text: `AI Response to "${backupMessage.current}"`,
          isUserMessage: false,
          createdAt: new Date().toISOString(),
        }
  
        // Add AI response to the list
        setMessages((prevMessages) => [aiResponse, ...prevMessages])
        setIsLoading(false)
      }, 1000)
    }
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setMessage(e.target.value)
    }
  
    return (
      <ChatContext.Provider
        value={{
          addMessage,
          message,
          handleInputChange,
          isLoading,
          messages
        }}>
        {children}
      </ChatContext.Provider>
    )
  }

//   This context handles a basic chat system where a user can type a message, send it, and then receive an AI-generated response after a short delay.
// The state and functionality for managing chat messages, input, and loading status are shared across components using the ChatContext.
// Components consuming this context can use the provided values and functions to display and interact with the chat system.