"use client"
import { useEffect, useState } from "react"
import fetchPokemonItems from "../app/service/fetchService"
import axios, { AxiosResponse } from "axios"
import { intBall } from "./lib/intBall"
import Image from "next/image"
export default function Home() {

  const [item, setItem] = useState<intBall[]>([])

  useEffect(() => {
    const fetchPokemonItems = async () => {
      try {
        const requests = Array.from({ length: 11 }, (_, i) =>
          axios.get(`https://pokeapi.co/api/v2/item/${i + 2}`)
        );

        const responses = await Promise.all(requests);
        const itemsData = responses.map((response) => response.data);
        setItem(itemsData);
        console.log(itemsData)
      } catch (error) {
        console.error('Error fetching Pokémon items:', error);
      }
    };

    fetchPokemonItems();

  }, [])

  return (
    <main>


{
                    item.map(post => (
                        <div key={post.id}>
                            <p>Titulo: <span>{post.names[5].name}</span></p>
                            <p>Coste: <span>{post.cost}&#165;</span></p>
                            <p>Category: <span>{post.category.name} </span></p>
                            <p>Efecto: <span>{post.flavor_text_entries[13].text}</span></p>
                         
                            <div>
                            <Image src={post.sprites.default} alt="foto ball" width={50} height={50}/>
                            </div>
                            
                        </div>
                    ))
                }



    </main>
  )
}
