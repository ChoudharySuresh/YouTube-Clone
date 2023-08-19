import { useDispatch, useSelector } from "react-redux";
import LiveMessage from "./LiveMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../Utils/LiveChatSlice";
import { generateName , makeRandomString } from "../Utils/helper";
import { VscSend } from "react-icons/vsc";

const LiveChat = () => {

    const [livechat , setLiveChat] = useState("");
    const [isHidden , setIsHidden] = useState(false);
    const dispatch = useDispatch();

    const chatMessage = useSelector(store => store.live.messages);

    const toggleVisbility = () => {
        setIsHidden(!isHidden);
    }
    useEffect(()=> {
        const i = setInterval(()=> {
            // API Pooling

            dispatch(addMessage({
                name:generateName(),
                message: makeRandomString(20),
            }))
        }, 2000)

        return () => {
            clearInterval(i);
        }
    } , [])
    return (
        <>
            <div className="bg-white h-[30rem] border border-gray-300 rounded-lg flex flex-col justify-between">
                <div className="px-4 py-4 border-b">
                    <h1 className="font-bold">Top Chat</h1>
                </div>

                {
                    !isHidden && 
                    <div className="overflow-y-scroll h-[23rem] my-2 border-b px-4 py-3 flex flex-col-reverse">
                        {
                            chatMessage.map((chat,index) => ( 
                                <LiveMessage key={index} name={chat.name} message={chat.message}/>)
                            )
                        }
                    </div>
                }

                <div className="p-4">
                    <form className="flex items-center justify-between mb-2" onSubmit={ (e) => {
                        e.preventDefault();
                        dispatch(addMessage({
                            name:"Suresh choudhary",
                            message:livechat,
                        }))

                        setLiveChat("");
                    }
                    }>
                        <input type="text" placeholder="Type Something.." className="border-b w-[80%] outline-0" value={livechat} onChange={(e) => setLiveChat(e.target.value)}/>
                        <button className="bg-slate-200 p-2 rounded-full" type="submit"> <VscSend className="text-2xl"/> </button>
                    </form>
                    <div>
                        <button className="w-full bg-slate-100 px-1 py-2 rounded-3xl" onClick={toggleVisbility}>
                            {isHidden ? "Show Chat" : "Hide Chat"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default LiveChat;