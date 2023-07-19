import Image from "next/image"
import Link from "next/link"



type Props = {
  character: Character
}


const CharacterCard = ({ character }: Props) => {

  return (
    <div className="p-2 flex flex-col">

      {/*-------Image-------*/}
      <figure className="flex-1 w-full h-full">
        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} width={500} height={400} alt="img" className="w-full h-full object-cover rounded" />
      </figure>

      {/*-------Name-------*/}
      <div className="py-3 flex flex-col gap-3">
        <h2>{character.name}</h2>
        <Link href={`/characterDetails/${character.id}`} className="bg-purple-600 px-2 py-3 text-xs rounded transition-colors hover:bg-purple-700 text-center">Details{character.name}</Link>
      </div>
      
    </div>
  )
}

export default CharacterCard