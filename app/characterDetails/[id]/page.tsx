import { getCharacterDetails } from "@/utils/api"
import Image from "next/image"
import Link from "next/link"


type Props = { 
    params: {
        id: string
    }
}



const CharacterDetailsPage = async ({ params: { id } }: Props) => {
  const characterDetails = await getCharacterDetails(id)
  const character = characterDetails.results[0]


  return (
    <section className="w-full max-w-[1100px] mx-auto p-3 flex flex-col justify-center mt-3 pt-4 border-t-2 border-t-gray-600">

        {/*-------Title-------*/}
        <div className="flex gap-2 justify-between items-center">
            <h1 className=" text-2xl">{character.name} Details</h1> 
            <Link href='/' className='p-2 bg-purple-600 text-sm rounded transition-colors hover:bg-purple-700'>back to home</Link>
        </div>

        {/*-------Description-------*/}
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-auto1fr mt-5">
            <figure className="flex-1 w-[400px] h-[400px]">
                <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} width={500} height={400} alt="img" className="w-full h-full object-cover rounded" />
            </figure>
            <div className="mt-3">
                <h1 className="text-xl mb-3">{character.name}</h1>
                <p className="max-w-[600px] text-base">{character.description}</p>
            </div>
        </div>

    </section> 
  )
}

export default CharacterDetailsPage