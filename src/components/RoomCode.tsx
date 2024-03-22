import React, { useState } from 'react';
import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
    code?: string;
}

export function RoomCode({ code = "" }: RoomCodeProps) {
    const [copied, setCopied] = useState(false);

    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Defina um timer para redefinir o estado após 3 segundos
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy Room Code" />
            </div>
            <span>Sala #{code}</span>
            {copied && <span style={{ marginLeft: '5px' }}>Copiado!</span>}
        </button>
    );
}
