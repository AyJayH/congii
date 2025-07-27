import { useState } from 'react';

function Colorbutton(){
  const colors: string[] = ['red', 'green', 'blue'];
  const [colorIndex, setColorIndex] = useState<number>(0);

  const cycleColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }
  return (
    <button
      onClick={cycleColor}
      style={{
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Click me
    </button>
  );

};

export default Colorbutton;




// import React, { useState } from 'react';

// const Colorbutton: React.FC = () => {
//   const colors: string[] = ['red', 'green', 'blue'];
//   const [colorIndex, setColorIndex] = useState<number>(0);

//   const cycleColor = () => {
//     setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
//   };

//   return (
//     <button
//       onClick={cycleColor}
//       style={{
//         backgroundColor: colors[colorIndex],
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//       }}
//     >
//       Click me
//     </button>
//   );
// };

// export default Colorbutton;