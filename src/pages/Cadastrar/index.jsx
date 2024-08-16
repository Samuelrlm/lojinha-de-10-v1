import { useState } from "react"
import instance from "../../api/instance"

export default function Cadastrar() {
    const [nome, setNome] = useState('')
    const [episodios, setEpisodios] = useState('')
    const [ano, setAno] = useState('')
    const [genero, setGenero] = useState('')
    const [imagem, setImagem] = useState('')
    const [sinops, setSinops] = useState('')
    
    function handleSubmit() {
        instance.post('/animes', {
            nome: nome,
            episodios: episodios,
            ano: ano,
            genero: genero,
            imagem: imagem,
            sinopse: sinops
        })
    }
        

    return (
        <div className="gap-3 flex flex-col">
            <div className="">
                <label htmlFor="">nome</label>
                <input
                    onChange={(e) => setNome(e.target.value)}
                type="text" />
            </div>
            <div className="">
                <label htmlFor="">episodios</label>
                <input
                    onChange={(e) => setEpisodios(e.target.value)}
                type="number" />
            </div>
            <div className="">
                <label htmlFor="">ano</label>
                <input
                    onChange={(e) => setAno(e.target.value)}
                type="number" />
            </div>
            <div className="">
                <label htmlFor="">genero</label>
                <input
                    onChange={(e) => setGenero(e.target.value)}
                type="number" />
            </div>
            <div className="">
                <label htmlFor="">imagem</label>
                <input
                    onChange={(e) => setImagem(e.target.value)}
                type="text" />
            </div>
            <div className="">
                <label htmlFor="">sinops</label>
                <input 
                    onChange={(e) => setSinops(e.target.value)}
                type="text" />
            </div>
            <div className="w-full">
                <button
                    onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded-md">Cadastrar</button>
            </div>
        </div>
    )
}