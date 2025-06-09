import React, { useEffect, useRef, useState } from 'react';

const WebSocketComponent: React.FC = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [prevMessage, setPrevMessage] = useState<string>('');
  const [received, setReceived] = useState<string[]>([]);
  const lastKeyRef = useRef<string | null>(null);

  class documentModification{constructor(public character: String, public position: number, public operation: String){}}; 

  useEffect(() => {
    socketRef.current = new WebSocket('ws://172.20.10.4:8080/websocket'); //Cannot be local host
    socketRef.current = new WebSocket('ws://localhost:8080/websocket'); //Cannot be local host


    socketRef.current.onopen = () => {
      console.log('WebSocket connected');
    };

    socketRef.current.onmessage = (event: MessageEvent) => {
      setReceived(prev => [...prev, event.data]);
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  const sendChar = (info: documentModification) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(info));
      console.log(info);
    } else {
      console.error('WebSocket is not open');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    lastKeyRef.current = e.key;
    if (lastKeyRef.current === 'Enter') {

        sendChar(new documentModification('Newline', 0, 'INSERT'));
    } 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (
      lastKeyRef.current === 'Backspace' ||
      lastKeyRef.current === 'Delete' ||
      newValue.length < prevMessage.length
    ) {
      // Deletion detected
      const deleted = getDeletedCharacters(prevMessage, newValue);
      deleted.forEach(({ char, index }) =>
        sendChar(new documentModification(char, index, 'DELETE'))
      );
    } else {
      // Addition
      const addedChar = getAddedCharacter(prevMessage, newValue);
      if (addedChar.char) {
        sendChar(new documentModification(addedChar.char, addedChar.index, 'INSERT'));
      }
    }

    setPrevMessage(newValue);
    setMessage(newValue);
  };

  // Returns deleted characters and their positions
  const getDeletedCharacters = (
    oldStr: string,
    newStr: string
  ): { char: string; index: number }[] => {
    const deleted: { char: string; index: number }[] = [];

    let i = 0;
    while (i < oldStr.length && i < newStr.length) {
      if (oldStr[i] !== newStr[i]) break;
      i++;
    }

    // Capture characters removed from oldStr starting at index i
    for (let j = i; j < oldStr.length - (newStr.length - i); j++) {
      deleted.push({ char: oldStr[j], index: j });
    }

    return deleted;
  };

  // Returns added character and its position
  const getAddedCharacter = (
    oldStr: string,
    newStr: string
  ): { char: string; index: number } => {
    let i = 0;
    while (i < oldStr.length && i < newStr.length) {
      if (oldStr[i] !== newStr[i]) break;
      i++;
    }
    return { char: newStr[i] ?? '', index: i };
  };

  return (
    <div>
      <input
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
      />
      <button
        onClick={() => {
          if (message) {
            //sendChar(`(full message: "${message}")`);
            setMessage('');
            setPrevMessage('');
          }
        }}
      >
        Send
      </button>

      <div>
        <h4>Received Messages:</h4>
        {received.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketComponent;