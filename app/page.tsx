import CharacterCard from "@/components/CharacterCard"
import { getCharacters } from "@/utils/api"




export default async function Home() {
  const characters = await getCharacters()


  return (
    <main className="w-full max-w-[1200px] mx-auto mt-7">

      {/*-------Title-------*/}
      <section className="text-center py-6">
        <h1 className="text-2xl">Popular Characters Marvels</h1>
      </section>


      {/*-------Character-Cards-------*/}
      <section className='grid grid-cols-fluid gap-3 p-4'>
        {
          characters?.results?.map(character => <CharacterCard key={character.id} character={character} />)
        }
      </section>
        
    </main>
  )
}
