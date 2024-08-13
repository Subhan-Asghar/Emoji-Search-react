import './App.css'
import { useState} from 'react'


function App() {
  const [etext ,setetext]=useState('')
  const [emojis, setEmojis] = useState([])

async function api(search){
  const response= await fetch(`https://emoji-api.com/emojis?search=${search}&access_key=906b3d4acbac966e1342e711f7cbdb33cc43da9c`)
  var data=await response.json()
  if(data.status=='error'){
   alert("Enter Vaild Input")
  }else{
    setEmojis(data)
    console.log(data)
  }
  
  
  }
  

  return (
    <>
     <h1>Emoji Search</h1>
     
       <input 
        type="text"
        className='my-4 w-3/4 rounded-lg h-9 px-3 '
        placeholder='Search'
        onChange={(e)=>{setetext(e.target.value)}}/>
       <button onClick={() => api(etext)}>Search</button>
       {/* ................................................ */}
       <div className='flex flex-row flex-wrap w-100'>      
          {emojis.map(emoji => (
          <div className='h-10 bg-gray-400 m-5 text-xl  cursor-pointer rounded-lg w-12 content-center flex-row' 
          key={emoji.slug}
          onClick={() => { navigator.clipboard.writeText(emoji.character) }}
          >          
            {emoji.character}
            </div>

        ))}
      </div>
    </>
  )
}

export default App


