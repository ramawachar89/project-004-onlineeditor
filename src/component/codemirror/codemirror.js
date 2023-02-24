import React, { useEffect } from 'react'
import codemirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
export default function Codemirror(){
    useEffect(()=>{
        async function init(){
            codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
                mode: { name: 'javascript', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
            });

        }
        init()
    },[])
    return <textarea id="realtimeEditor"></textarea>
}