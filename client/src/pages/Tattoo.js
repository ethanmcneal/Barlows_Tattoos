import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "bootstrap-react"
import TattooForm from "./TattooForm"

const Tattoo = () => {
    const {id} = useParams()
    const [tattoo, setTattoo] = useState(null)
    const [showForm, setShowForm] = useState(false)

    
    useEffect(()=> {
        getData()
    },[])

    const getData = async() => {
        try {
            let res = await axios.get(`/api/drawings/${id}`)
            setTattoo(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteTattoo = async(uid) =>{
        try {
            let res = await axios.delete(`/api/drawings/${uid}`)
        } catch (error) {
            console.log(error)
        }
    }
    
return(
    <div>
        Tattoo SHow page
       { tattoo && 
        <div >
            <img src={tattoo.media} alt={tattoo.title}/>
            {tattoo.title}
            {tattoo.description}
            {tattoo.category}
            {tattoo.price}
            {/* {tattoo.for_sale} */}
        <Button onClick={()=>deleteTattoo(tattoo.id)}>Delete</Button>
        <Button onClick={()=>setShowForm(true)}>Edit</Button>
        {showForm && <TattooForm tattoo={tattoo}/>}
        </div>}
    </div>
)
}
export default Tattoo