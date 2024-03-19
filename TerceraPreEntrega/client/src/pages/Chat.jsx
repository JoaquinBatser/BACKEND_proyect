import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { sendSocketMessage } from '../api/fetch'

const Chat = ({ user }) => {
  const [message, setMessage] = useState('')
  const chatUser = user ? user.first_name : 'Guest'
  const sendMessage = async (e) => {
    e.preventDefault()
    const messageData = {
      chatUser,
      message,
    }
    console.log(messageData)
    const chatResponse = await sendSocketMessage({ messageData })
    console.log(chatResponse)
  }
  console.log(message)
  return (
    <div>
      <h1>Chat</h1>
      <p>{chatUser}</p>

      <div id="chat">
        <div id="messages-list">
          <div>
            {/* <small class='message-user'>{{this.user}}</small>
          <div class='message-text'>{{this.message}}</div>
          <small class='message-time'>{{this.createdAt}}</small> */}
          </div>
        </div>

        <form id="message-form">
          <input
            type="text"
            id="message-input"
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            autocomplete="off"
          />
          <button type="button" onClick={sendMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat
