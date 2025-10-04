import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    const registerEvent = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div style={{ textAlign: "center", paddingBottom: '30px' }}>
            {
                isSubmitted ? (
                    <h4>Congratulations {name}, you are successfully registered the event</h4>
                ) : (
                    <div>

                        <h1>Register the event with your name</h1>
                        <form onSubmit={registerEvent}>
                            <label>Enter your name and submit</label><br />
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                            <button type='submit'>Register the event</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Register