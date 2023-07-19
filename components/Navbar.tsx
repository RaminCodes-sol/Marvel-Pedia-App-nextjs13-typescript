'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"



const Navbar = () => {
  const [querySearch, setQuerySearch] = useState<string>('')
  const router = useRouter()


  /*-------Handle-Search-------*/
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && querySearch.trim() !== '') {
      setQuerySearch('')
      router.push(`/search?query=${querySearch}`)
    }
  }

    
  return (
    <nav className='flex justify-between items-center py-5 px-10'>
      
      <div>
        <Link href='/' className="p-3 bg-orange-500 text-sm rounded transition-colors hover:bg-orange-600">Marvel Pedia</Link>
      </div>

      <div>
        <input 
          type='text' 
          placeholder='Search...' 
          value={querySearch} 
          onChange={(e) => setQuerySearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </nav>
  )
}

export default Navbar