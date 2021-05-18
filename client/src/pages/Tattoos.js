import axios from "axios"
import { useEffect, useState } from "react"
import { Menu, Tab } from "semantic-ui-react"
import FinishedTattoos from "./FinishedTattoos"
import ForSaleTattoos from "./ForSaleTattoos"

const Tattoos = () => {

    const [tattoos, setTattoos] = useState(null)
    useEffect(()=> {
        getData()
    },[])

    const getData = async() => {
        try {
            let res = await axios.get('/api/drawings')
            setTattoos(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const renderTattoos = (c) => (
           tattoos.map(tattoo => {
            return c ?(
               
            <FinishedTattoos tattoo={tattoo}/> 
            )
            :(
            <ForSaleTattoos tattoo={tattoo}/>
            )
            }
            )
        )
    
    const panes = [
        {
          menuItem: <Menu.Item color='teal' style={{fontSize: '1.5em', margin: '0'}}>Tattoos</Menu.Item>,
          render: () => <Tab.Pane attached={false}>
              <div className='drawing-container'>
                  {renderTattoos('finished')}
              </div>
              </Tab.Pane>,
        },
        {
          menuItem: <Menu.Item color='teal' style={{fontSize: '1.5em', margin: '0'}}>For Sale</Menu.Item>,
          render: () => <Tab.Pane attached={false}>
             <div className='drawing-container'>
              {renderTattoos()}
              </div>
              </Tab.Pane>,
        },
      ]
    return(
        <div>
            <h1>Tattoos</h1>
            {tattoos && <Tab style={{padding: '8px 0 0 0'}} menu={{ secondary: true, pointing: true }} panes={panes}  /> }
            {/* {JSON.stringify(tattoos, null, 2) } */}
        </div>
    )
}
export default Tattoos