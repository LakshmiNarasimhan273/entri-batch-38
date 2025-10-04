import React, { useState } from 'react'

function Like() {
    const [liked, setLiked] = useState(false);
    const like = () => {
        setLiked(!liked);
    }
    return (
        <div>
            <img src="https://i.pinimg.com/1200x/cc/c1/48/ccc14816a443cb919c308c2c37617e76.jpg" width="100" height="100" alt="" />
            <button onClick={like}>💌</button>
            {
                liked ? (
                    <h1>💗</h1>
                ) : (
                    <p></p>
                )
            }
        </div>
    )
}

export default Like