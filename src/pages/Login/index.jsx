import { useState } from "react"
import instance from "../../api/instance"

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit() {
        const response = await instance.post('/login', {
            email: email,
            password: senha
        })
        console.log(response.data)
        localStorage.setItem('token',response.data)
    }

    return (
        <div className="">
            <div className="">
                <label htmlFor="">Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                type="text" />
 
            </div>
            <div className="">
                <label htmlFor="">Senha</label>
                <input
                    onChange={(e) => setSenha(e.target.value)}
                type="password" />
            </div>

            <button
                onClick={handleSubmit}
            className='bg-blue-500 text-white px-4 py-2 rounded-md'>Entrar</button>
        </div>
    )
}