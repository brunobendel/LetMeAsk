
import { useState } from "react";
import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
    code?: string;
}

export function RoomCode({code = ""} : RoomCodeProps){

    const [copied , setCopied]= useState(false);


    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);

        },1000)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy Room Code" />
            </div>
            {copied ? (
                <span>Copiado com sucesso!</span>
            ):(
                <span>Sala #{code}</span>
            )}
        </button>
    );
}