'use client'
import CharacterCard from "@/components/CharacterCard"
import { searchCharacters } from "@/utils/api"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"





const SearchPage = () => {
  const searchParams = useSearchParams()
  const querySearch = searchParams.get('query')

  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)



  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await searchCharacters(querySearch)
            setCharacters(data.results)

        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }
    
    if (querySearch) {
        fetchData()
    }
  }, [querySearch])



  if (characters.length === 0) return <h1 className="text-center text-xl">no results for "{querySearch}"</h1>


  return (
    <section className='w-full max-w-[1200px] mx-auto mt-5'>
        
        {/*-------Title-------*/}
        <div className="py-5">
            <h1 className="text-center text-2xl font-bold">Search for "{querySearch}"</h1>
        </div>

        {/*-------Character-Cards-------*/}
        {
            loading 
                ? (<h1 className='text-center text-xl self-center my-6'>Loading...</h1> )
                : (<div className='w-full grid grid-cols-fluid gap-4'>
                    {
                        characters?.map(character => <CharacterCard key={character.id} character={character} />)
                    }
                </div>)
        }
        
    </section>
  )
}

export default SearchPage