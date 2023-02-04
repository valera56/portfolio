import { useContext, useState } from "react"
import { productContext } from "../contexts/ProductContext"

const RegisterPage = () => {
    const {registerUser} = useContext(productContext)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const handleClick = () => {
        const obj = {
            email: login,
            password
        }
        registerUser(obj)
    }
    return (
        <>
        <input value={login} type="text" onChange={(e) => setLogin(e.target.value)} />  
        <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleClick}>Register</button>
        </>
    )
}
export default RegisterPage