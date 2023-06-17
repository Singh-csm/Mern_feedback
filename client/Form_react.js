import React, {useState} from "react";
import axios from "axios";


const Five = () => {
    const [data, setData] = useState({name:"", email:"",password:"", feedback:""});

    const handleInput = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = {name:data.name, email:data.email, password:data.password, feedback:data.feedback}
        let response = await axios.post("http://localhost:4000/form", result)
        console.log(response)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" onChange={handleInput} name="name" />
                <input type="email" placeholder="email" onChange={handleInput} name="email" />
                <input type="password" placeholder="password" onChange={handleInput} name="password" />
                <textarea typeof="text" placeholder="feedback" onChange={handleInput} name="feedback" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Five;