import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import UserContextType from './../types/UserContextType';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const uerContextType: UserContextType | null = useContext(UserContext)

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(uerContextType)
            uerContextType.setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login