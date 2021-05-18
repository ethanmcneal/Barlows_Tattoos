const ForSaleTattoos = (props) => {
    const {tattoo} = props
    return(
        <>
          {tattoo.for_sale &&  
            <div className='image-card'> 
              <img src={tattoo.media} alt={tattoo.title} />
              <div className='price-box'>
                  ${tattoo.price}
              </div>
              </div>
            }
       </>
    )
}
export default ForSaleTattoos