// import React, { useState, useEffect, useRef} from "react";
// import LineGenerator from "./PageGenerator";

// type ApiResponse = {
//     lines: number;
//     firstLine: number;
//     documentEntries: DivDataFull[];
// };

// export type DivDataFull = {
//   id: number;
//   string: string;
//   next: number;
//   prev: number;
// }

// export type DivDataPartial = {
//   id: number;
//   string: string;
// }

// type Props = {
//   page: string;
// };


// const PageRequest : React.FC<Props> = ({page}) => {
//   const [response, setResponse] = useState<ApiResponse | null>(null);
  




//   useEffect(() => {
//     // This runs once on initial render (page load)
//     const fetchData = async () => {
//       try {
        
//         const res = await fetch(`http://localhost:8080/page/${page}`, {
//           method: "GET",
//         //   credentials: "include", // Include if using cookies for auth - need to include header for CORS
//         });

//         if (!res.ok) throw new Error("Failed to fetch");

//         const data : ApiResponse = await res.json();
//         setResponse(data);
//       } catch (err) {
//         console.error("GET failed:", err);
//       }
//     };

//     fetchData();
//   }, []);

    



//   return (
//     <div style={{ padding: "2rem" }}>
//       {response && <LineGenerator json={response}></LineGenerator>}
//     </div>
//   );
// };

// export default PageRequest;


// // import React, { useState } from "react";

// // type DivData = {
// //   id: string;
// //   content: string;
// // };

// // export default function InsertBelowDiv() {
// //   const [divs, setDivs] = useState<DivData[]>([
// //     { id: "1", content: "First" },
// //     { id: "2", content: "Second" },
// //   ]);

// //   const insertBelow = (targetId: string) => {
// //     const newDiv: DivData = {
// //       id: crypto.randomUUID(),
// //       content: "",
// //     };

// //     setDivs((prev) => {
// //       const index = prev.findIndex((d) => d.id === targetId);
// //       if (index === -1) return prev;
// //       const newDivs = [...prev];
// //       newDivs.splice(index + 1, 0, newDiv); // Insert below
// //       return newDivs;
// //     });
// //   };

// //   return (
// //     <div className="p-4 space-y-2">
// //       {divs.map((div) => (
// //         <div key={div.id} className="border p-2">
// //           <input
// //             value={div.content}
// //             onChange={(e) =>
// //               setDivs((prev) =>
// //                 prev.map((d) =>
// //                   d.id === div.id ? { ...d, content: e.target.value } : d
// //                 )
// //               )
// //             }
// //             onKeyDown={(e) => {
// //               if (e.key === "Enter") {
// //                 e.preventDefault();
// //                 insertBelow(div.id); // Insert below current div
// //               }
// //             }}
// //             className="w-full"
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


import React from "react";

  import "./App.css"
export default function DocumentPage() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-800 p-8 h-screen no-scrollbar">
      <h1 className="text-4xl font-bold text-left text-white mb-8">Document 123</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
        <div className="bg-gray-600 rounded-2xl shadow-md p-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 ">Your Page</h2>
          <textarea
            className="w-full h-96 p-4 border rounded-lg resize-none border-none outline-none no-scrollbar"
            placeholder="Write your version here..."
          />
        </div>
        <div className="bg-gray-600 rounded-2xl shadow-md p-6 w-full ">
                          <div className="flex gap-2">
                                      <h2 className="text-2xl font-semibold mb-4 ">Team Page</h2>

              <span className="w-4 h-4 rounded-full bg-green-200 my-2.5"></span>
              <span className="w-4 h-4 rounded-full bg-green-200 my-2.5"></span>
              <span className="w-4 h-4 rounded-full bg-green-200 my-2.5"></span>

            </div>
          <textarea
            className="w-full h-96 p-4 border rounded-lg resize-none border-none outline-none no-scrollbar"
            placeholder="Collaborative team view..."
          />
        </div>
      </div>
    </div>
  );
}
