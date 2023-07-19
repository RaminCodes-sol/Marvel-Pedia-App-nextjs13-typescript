import md5 from 'md5'


const API_BASE_URL = "https://gateway.marvel.com/v1/public"
const API_PUBLIC_KEY = "cc46e01a8e238a240a9875d7da5c83cb"
const API_PRIVATE_KEY = "53be64ae9d0b7856296715a86e6ec6dd02db1f42"




const getTimeStamp = () => Date.now().toString()
const timeStamp = getTimeStamp()


//md5(ts+privateKey+publicKey)
const getHash = (timeStamp: string) => md5(timeStamp+API_PRIVATE_KEY+API_PUBLIC_KEY)
const hash = getHash(timeStamp)

const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`



/*-------Handle-Response-------*/
const handleResponse = async <T> (response: Response) => {
   if (!response.ok) {
      throw new Error(response.statusText)
   }

   const data = await response.json()
   return data.data as T
}


/*-------Get-Characters-------*/
export const getCharacters = async (): Promise<CharacterDataWrapper> => {
   const url = `${API_BASE_URL}/characters?${query}`
   const response = await fetch(url)

   return handleResponse<CharacterDataWrapper>(response)
}


/*-------Get-Character-Details-------*/
export const getCharacterDetails = async (id: string): Promise<CharacterDataWrapper> => {
   const url = `${API_BASE_URL}/characters/${id}?${query}`
   const response = await fetch(url)

   return handleResponse<CharacterDataWrapper>(response)
}


/*-------Search-Character-------*/
export const searchCharacters = async (querySearch: string | null): Promise<CharacterDataWrapper> => {
   const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
   const response = await fetch(url)

   return handleResponse<CharacterDataWrapper>(response)

}