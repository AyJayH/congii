import './App.css'
import { motion } from "framer-motion";
import googleSvg from './assets/google.svg';
import icloudSvg from './assets/icloud.svg';
import onedriveSvg from './assets/onedrive.svg';


function App() {


  const squares = [

    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
  ];

  return (
  <div className = "w-screen h-screen bg-drab-brown flex flex-col justify-center overflow-clip">
      <div className = "h-[134px] w-full flex items-center flex-row-reverse">

        {squares.map((square) =>( 
          <motion.div 
            key = {square.id}
            className = {square.id == 1 ? "h-[140px] aspect-square bg-moss-green rotate-45  mr-[64px] rounded-2xl" : 
            "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl"}  
            initial={{opacity: 0, rotate:-45}} 
            animate={{opacity: 1, rotate:0}} 
            transition={{duration: 1, delay: 0.1 * (9-square.id)}}>
          </motion.div>
        ))}
  
      </div>
      <div className = "h-[134px] w-full flex items-center flex-row-reverse">


      {squares.map((square) =>( 
          <motion.div 
            key = {square.id}
            className = {square.id == 1 ? "h-[140px] aspect-square bg-moss-green rotate-45  -mr-[70px] rounded-2xl" : 
            square.id == 3 ? "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl" :
            "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl"}  
            initial={{opacity: 0, rotate:-45}} 
            animate={{opacity: 1, rotate:0}} 
            transition={{duration: 1, delay: 0.1 * (9-square.id)}}>
          </motion.div>
        ))}
     </div>

      <div className = "h-[134px] w-full flex items-center flex-row-reverse">
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[64px] rounded-2xl " initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.1}}></motion.div>
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>        
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>        
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl flex items-center justify-center"  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.8}}>
        <motion.img src={icloudSvg} className = "z-15 opacity-20  -rotate-45 h-[70%] mb-[10px] mr-[10px]" initial={{opacity: 0}} animate={{opacity: 0.2}} transition={{duration: 1, delay: 2}}/>
      </motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.7}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.6}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.5}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.4}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.3}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.2}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.1}}></motion.div>
      </div>

      <div className = "h-[134px] w-full flex items-center flex-row-reverse position:fixed img">
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  -mr-[70px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.0}}></motion.div>
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center">
          <motion.div className = "h-[519px] aspect-square bg-sage  rounded-2xl absolute"  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3, delay: 1.5}}></motion.div>
          
      </div>
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl flex items-center justify-center"  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.8}}>
        <motion.img src={onedriveSvg} className = "z-15 opacity-20  -rotate-45 h-[70%] mb-[10px] mr-[10px]" initial={{opacity: 0}} animate={{opacity: 0.2}} transition={{duration: 1, delay: 2}}/>
      </motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.7}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.6}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.5}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.4}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.3}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.2}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.1}}></motion.div>
      </div>

      <div className = "h-[134px] w-full flex items-center flex-row-reverse">
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[64px] rounded-2xl " initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.1}}></motion.div>
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>        
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>        
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.8}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.7}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.6}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.5}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.4}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.3}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.2}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.1}}></motion.div>
      </div>

      <div className = "h-[134px] w-full flex items-center flex-row-reverse">
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  -mr-[70px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.0}}></motion.div>
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.0}}></motion.div>
      <div className = "h-[140px] aspect-square bg-transparent rotate-45  mr-[128px] rounded-2xl flex justify-center items-center"></div>
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.8}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.7}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.6}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.5}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.4}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.3}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.2}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.1}}></motion.div>
      </div>

      <div className = "h-[134px] w-full flex items-center flex-row-reverse">
      <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[64px] rounded-2xl " initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.1}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 1.0}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.9}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.8}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.7}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.6}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.5}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.4}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.3}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.2}}></motion.div>
        <motion.div className = "h-[140px] aspect-square bg-moss-green rotate-45  mr-[128px] rounded-2xl "  initial={{opacity: 0, rotate:-45}} animate={{opacity: 1, rotate:0}} transition={{duration: 1, delay: 0.1}}></motion.div>
      </div>
      
    </div>);
};

export default App;


