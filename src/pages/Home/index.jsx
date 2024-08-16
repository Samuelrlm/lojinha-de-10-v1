import { useEffect, useState } from "react"
import instance from "../../api/instance"

export default function Home(){
    const [produtos, setProdutos] = useState([])

  useEffect(() => {
    instance.get('/animes')
      .then((response) => {
        setProdutos(response.data)
      })
  },[])

  return (
    <div className="flex flex-wrap w-full h-screen gap-4">
        {produtos.map((produto) => (
          <div className='
            text-black w-[300px] h-[200px] bg-white p-2
              rounded-md overflow-hidden flex items-center
              justify-center flex-col'
            key={produto.id}>
            <h2>{produto.nome}</h2>
            <img className=' h-[80px] ' src={produto.imagem} alt={produto.nome} />
            <p>{produto.preco_desconto}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Comprar</button>
          </div>
        ))}
    </div>
  )
}