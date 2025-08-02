// import React, { useEffect, useRef, useState }  from "react";
// import './App.css'
// import WebSocketComponent from "./socket";
// import type {DivDataFull} from "./PageRequest"
// import type {DivDataPartial} from "./PageRequest"



// type props = {
//   json: {
//     lines: number;
//     firstLine: number;
//     documentEntries: DivDataFull[];
//   };

// };

// type LineOperations = {timestamp: number, aboveLine: number, operation: number};



// const LineGenerator: React.FC<props> = ({ json }) => {
// const lineMap = new Map(json.documentEntries.map(line => [line.id, line]));
//   const socketRef = useRef<WebSocket | null>(null);

//   const [message, setMessage] = useState<string>('');
//   const [globalText, setGlobalText] = useState<string>('');
//   const [prevMessage, setPrevMessage] = useState<string>('');
//   const [received, setReceived] = useState<string[]>([]);
//   const lastKeyRef = useRef<string | null>(null);
//   const [divs, setDivs] = useState<DivDataPartial[]>([]);
//   const isInitialized = useRef(false);
//   const lineCount = useRef(0);
//   const [lineOperations, setLineOperations] = useState<LineOperations[]>([]);
//   const latestLineUpdate = useRef(0);



//   class documentModification{constructor(public character: String, public position: number, public operation: String){}}; 

//   useEffect(() => {
//       // socketRef.current = new WebSocket('ws://172.20.10.4:8080/websocket'); //Cannot be local host
//       socketRef.current = new WebSocket('ws://localhost:8080/websocket'); //Cannot be local host
  
  
//       socketRef.current.onopen = () => {
//         console.log('WebSocket connected');
//       };
  
//       socketRef.current.onmessage = (event: MessageEvent) => {
//         setReceived(prev => [...prev, event.data]);
//         handleGlobalMessage(event);
//       };
  
//       socketRef.current.onclose = () => {
//         console.log('WebSocket disconnected');
//       };
  
//       return () => {
//         socketRef.current?.close();
//       };


        
//     }, []);

//     useEffect(() => {
        
//       if (isInitialized.current == false) {
//         var x = json.firstLine;
//         while (x != 0){
//           const entry = lineMap.get(x);
//           if (entry !== undefined){
//             const newDiv : DivDataPartial = {id: entry.id, string: entry.string};
//             setDivs((prev) => [...prev, newDiv]);
//           }
//         }
//         isInitialized.current = true;
//       }

//       }, []);

//       useEffect(() => {
        
//       console.log(divs);

//       }, [divs]);
      

        

//   const sendChar = (info: documentModification) => {
//     if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
//       socketRef.current.send(JSON.stringify(info));
//       console.log(info);
//     } else {
//       console.error('WebSocket is not open');
//     }
//   };

//   // const insertBelow = (targetLine: number) => {
  
//   //     setDivs((prev) => {
//   //       const index = prev.findIndex((d) => d.id == targetLine);
//   //       const temp = divs[index].next;

//   //       if (index === -1) return prev;
//   //       const newDivs = [...prev];
//   //       const newDiv: DivDataFull = {
//   //       id: targetLine + 1,
//   //       string: "",
//   //     };
//   //       newDivs.splice(index + 1, 0, newDiv); // Insert below
//   //       return newDivs;
//   //     });
//   //   };

  

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, lineNumber: number)=> {
//     lastKeyRef.current = e.key;
//     if (lastKeyRef.current === 'Enter') {
//         sendChar(new documentModification('', 0, 'NEWLINE'));
//         e.preventDefault();       // Prevent default form submission or newline
//         // return insertBelow(lineNumber);  
//     }   
//   };



//   const handleGlobalMessage = (event: MessageEvent) =>{
//     const obj = JSON.parse(event.data);
//     // if (!(obj.sender == userId) )

//     if (obj.operation === "INSERT"){
//       setGlobalText(prev => prev.concat(obj.character));
//     }// } else if (obj.operation === "DELETE"){
//     else if (obj.operation === "NEWLINE"){
//         // if (obj.timestamp < lineOperations[latestLineUpdate.current].timestamp){
//         //     var tempIndex = latestLineUpdate.current;
//         //     while (tempIndex >= 0 && obj.timestamp < lineOperations[tempIndex].timestamp){
//         //       tempIndex--; 
//         //     }
//         //     lineOperations.splice(tempIndex + 1, 0, obj); //NEED TO EDIT OBJ
//         //     latestLineUpdate.current = latestLineUpdate.current + 1;
//         //     var temp = obj.aboveLine;
//         //     while (tempIndex < latestLineUpdate.current){
//         //       tempIndex++;
//         //       if (lineOperations[tempIndex].aboveLine == temp){
//         //         temp = divs[divs.findIndex((d) => d.id == obj.aboveLine)].id;
//         //       } 
//         //     }
//         //     insertBelow(temp);


//         // } else {
//         //   lineOperations.push(obj) //EDIT obj
//         //   latestLineUpdate.current++;
//         //   insertBelow(obj.aboveLine);
//         // }

//       }


//     /*
//       if operation == enter
//         if timestamp of the latest change is older, compelte action as typical
//         else if timestamp of the latest action is newer, retrace actions so that this is the next succesive action


//     */
//     // }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>, lineNumber: number) => {
//     const newValue = e.target.innerHTML || "";
//     console.log(lineNumber);

//     if (
//       lastKeyRef.current === 'Backspace' ||
//       lastKeyRef.current === 'Delete' ||
//       newValue.length < prevMessage.length
//     ) {
//       // Deletion detected
//       const deleted = getDeletedCharacters(prevMessage, newValue);
//       deleted.forEach(({ char, index }) =>
//         sendChar(new documentModification(char, index, 'DELETE'))
//       );
//     } else {
//       // Addition
//       const addedChar = getAddedCharacter(prevMessage, newValue);
//       if (addedChar.char) {
//         sendChar(new documentModification(addedChar.char, addedChar.index, 'INSERT'));
//       }
//     }

//     setPrevMessage(newValue);
//     setMessage(newValue);
//     };

//   // Returns deleted characters and their positions
//   const getDeletedCharacters = (
//     oldStr: string,
//     newStr: string
//   ): { char: string; index: number }[] => {
//     const deleted: { char: string; index: number }[] = [];

//     let i = 0;
//     while (i < oldStr.length && i < newStr.length) {
//       if (oldStr[i] !== newStr[i]) break;
//       i++;
//     }

//     // Capture characters removed from oldStr starting at index i
//     for (let j = i; j < oldStr.length - (newStr.length - i); j++) {
//       deleted.push({ char: oldStr[j], index: j });
//     }

//     return deleted;
//   };

//   // Returns added character and its position
//   const getAddedCharacter = (
//     oldStr: string,
//     newStr: string
//   ): { char: string; index: number } => {
//     let i = 0;
//     while (i < oldStr.length && i < newStr.length) {
//       if (oldStr[i] !== newStr[i]) break;
//       i++;
//     }
//         return { char: newStr[i] ?? '', index: i };
//   }




//   return (
//     <div>
//                   {divs.map((div) => (
// <div
//             key={div.id}
//             contentEditable 
//             suppressContentEditableWarning
//             style={{ minHeight: "1em", outline: "none",  width: "50em"}}
//             onInput={(e : React.ChangeEvent<HTMLInputElement>) => handleChange(e, div.id)}
//         onKeyDown={(e : React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, div.id)}>
//           {div.string}</div>
//       ))}
//     </div>
//   );
// };

// export default LineGenerator;