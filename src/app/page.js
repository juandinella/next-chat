"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  ChatWrapper,
  MainContainer,
  ChatToggle,
  Header,
  Conversation,
  MessageInput,
  Spacer,
  SuggestedQuestions
} from "janus-ds";

let conversationList = [
  {
    content: 'Hola Hola',
    variant: 'incoming',
  },
  {
    content: 'This is a message, test testing',
    variant: 'incoming',
  },
  {
    content:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    variant: 'outgoing',
  },
  {
    content: 'This is a message, test testing 😎',
    variant: 'outgoing',
  },
  {
    content: <a href="google.com">This is a link</a>,
    variant: 'outgoing',
  },
]

let questionList = [
  {
    children: 'Question number 1',
  },
  {
    children: 'Question number 2',
  },
  {
    children: 'Question number 3',
  },
  {
    children: 'Question number 4',
  },
  {
    children: 'Question number 5',
  },
  {
    children: 'Question number 6',
  },
  {
    children: 'Question number 7',
  },
  {
    children: 'Question number 8',
  },
  {
    children: 'Question number 9',
  },
  {
    children: 'Question number 10',
  },
]

export default function Home() {
  const [isChatVisible, setChatVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleChatVisibility = () => {
    setChatVisible(!isChatVisible);
    setIsClicked(!isClicked);
  };

  return (
    <>
      <MainContainer>
        {isChatVisible && (
          <ChatWrapper>
            <Header text="Chat with Janus" onClick={toggleChatVisibility}/>
            <Conversation
              messages={[...conversationList]}
            />
            <SuggestedQuestions
              questions={[...questionList]}
            />

            <MessageInput
              onSendMessage={() => {}}
              placeholder="Type a message..."
            />
          </ChatWrapper>
        )}
        <Spacer size="24" />
        <ChatToggle onClick={toggleChatVisibility} isClicked={isClicked} />
      </MainContainer>
    </>
  );
}
