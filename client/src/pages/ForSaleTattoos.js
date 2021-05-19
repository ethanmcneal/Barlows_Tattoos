import { Link } from "react-router-dom"

const ForSaleTattoos = (props) => {
    const {tattoo} = props
    return(
        <>
          {tattoo.for_sale &&  
            <div className='image-card'> 
                <Link to={`tattoo/${tattoo.id}`}>
              <img src={tattoo.media} alt={tattoo.title} />
                </Link>
              <div className='price-box'>
                  ${tattoo.price}
              </div>
              </div>
            }
       </>
    )
}
export default ForSaleTattoos