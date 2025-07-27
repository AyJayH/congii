import './Front.css'

import { useNavigate } from "react-router-dom";

function Front(){

      const navigate = useNavigate();


    const userStatusBox = (
        <div className="flex w-full border-t bg-gray-900 items-center absolute bottom-0">
            <div className="space-y-3 py-3 px-10">
                <div className = "text-white text-2xl"><strong>User:</strong> 192.168.1.12</div>
          <div className = "text-white text-2xl"><strong>Status:</strong> Online</div>
            </div>
            <div className="w-13 aspect-square bg-amber-400 ml-auto mr-15 rounded-xl">

          </div>
            
        </div>
      );

    const interactiveBox = (
    <div className="flex w-full border-t bg-gray-900 items-center absolute top-0 opacity-0 group-hover:opacity-100" >
        <div className="space-y-3 py-3 px-10">
            <div className = "text-white text-2xl"><strong>User:</strong> 192.168.1.12</div>
        <div className = "text-white text-2xl"><strong>Status:</strong> Online</div>
        </div>
        <div className="w-13 aspect-square bg-amber-400 ml-auto mr-15 rounded-xl">

        </div>
        
    </div>
    );

        
      const openEditDocument = (
        <div className="flex flex-col absolute inset-0 h-full items-center justify-center opacity-0 group-hover:opacity-100">
            <div className = "text-white"><strong>Edit this document</strong></div>
        </div>
      );

      const openViewDocument = (
        <div className="opacity-0 hover:opacity-100 flex absolute inset-0 items-center justify-center">
            <div className = "text-black"><strong>View this document</strong></div>
        </div>
      );


    return (
        <div className = "w-screen h-screen flex">
            <div className="w-[30vw] h-screen bg-gray-800 flex flex-col justify-center items-center p-4 space-y-4">
                <div className="box bg-amber-300 group hover:brightness-75 hover:scale-90 duration-300 hover:cursor-grab"
                onClick = {() => navigate("/page/1")}>
                    {userStatusBox} 
                    {openEditDocument}
                </div>
                <div className="box bg-amber-600 group hover:brightness-75 hover:scale-90 duration-300 hover:cursor-grab"
                onClick = {() => navigate("/page/2")}>
                    {userStatusBox} 
                    {openEditDocument}
                </div>
            </div>
            <div className = "w-[40vw] h-screen bg-gray-800 py-4">
                <div className = "box bg-amber-200 group hover:brightness-75 hover:scale-90 duration-300 hover:cursor-grab"
                onClick = {() => navigate("/page/shared")}>
                    {/* {userStatusBox}  */}
                    {openEditDocument}
                </div>
            </div>
            <div className="w-[30vw] h-screen bg-gray-800 flex flex-col justify-center items-center p-4 space-y-4">
                <div className="box bg-amber-300 group hover:brightness-75 hover:scale-90 duration-300 hover:cursor-grab"
                onClick = {() => navigate("/page/3")}>
                    {userStatusBox} 
                </div>
                <div className="box bg-amber-600 group hover:brightness-75 hover:scale-90 duration-300 hover:cursor-grab"
                onClick = {() => navigate("/page/4")}>
                    {userStatusBox} 
                </div>
            </div>
        </div>


    );

}

export default Front;