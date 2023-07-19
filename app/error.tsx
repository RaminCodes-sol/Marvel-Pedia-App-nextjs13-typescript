'use client'


type Props = {
  error: Error,
  reset: () => void
}


const error:React.FC<Props> = ({ error, reset }) => {

  console.log({error})

  return (
    <div className="text-center text-xl">
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()} className="p-3 bg-purple-600 transition-colors hover:bg-purple-700">Try Again</button>
    </div>
  )
}

export default error