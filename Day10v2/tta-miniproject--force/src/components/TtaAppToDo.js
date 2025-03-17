import React, { useState } from 'react'

function TtaAppToDo({ dispatch }) {
    const [text, setText] = useState("");

    const TtaHandelSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: "ADD_TODO", payload: text });
            setText("");
        }
    };
    return (
        <form action="" onSubmit={TtaHandelSubmit}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Nhập Công Việc....'
            />
            <button type='submit'>Thêm</button>
        </form>
    )
}

export default TtaAppToDo