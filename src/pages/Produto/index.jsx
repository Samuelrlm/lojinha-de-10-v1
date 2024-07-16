import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Produto(){
    const { id } = useParams()
    const [produto, setProduto] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    setLoading(true)
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduto(data))
        .then(() => setLoading(false))
    },[id])

    return (
        <div className="">
            {loading && <p>Carregando...</p>}
            <h2>{produto.title}</h2>
            <img className=' h-[80px] ' src={produto.image} alt={produto.title} />
            <p>{produto.price}</p>
            <p>{produto.description}</p>
            <p>{produto.category}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Comprar</button>
        </div>
    )
}