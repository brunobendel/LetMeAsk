<<<<<<< HEAD

import { useState } from "react";
=======
import React, { useState } from 'react';
>>>>>>> b0f94cef38fab79d854ca020ee82596431a4ce5c
import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
    code?: string;
}

export function RoomCode({ code = "" }: RoomCodeProps) {
    const [copied, setCopied] = useState(false);

    const [copied , setCopied]= useState(false);


    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code);
        setCopied(true);
<<<<<<< HEAD
        setTimeout(()=>{
            setCopied(false);

        },1000)
=======
        setTimeout(() => setCopied(false), 3000); // Defina um timer para redefinir o estado após 3 segundos
>>>>>>> b0f94cef38fab79d854ca020ee82596431a4ce5c
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy Room Code" />
            </div>
<<<<<<< HEAD
            {copied ? (
                <span>Copiado com sucesso!</span>
            ):(
                <span>Sala #{code}</span>
            )}
=======
            <span>Sala #{code}</span>
            {copied && <span style={{ marginLeft: '5px' }}>Copiado!</span>}
>>>>>>> b0f94cef38fab79d854ca020ee82596431a4ce5c
        </button>
    );
}
