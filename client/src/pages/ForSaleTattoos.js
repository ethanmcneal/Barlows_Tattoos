const ForSaleTattoos = (props) => {
    const {tattoo} = props
    return(
        <>
          {tattoo.for_sale &&  
            <div className='image-card'> 
              <img src={tattoo.media} alt={tattoo.title} />
              </div>
            }
       </>
    )
}
export default ForSaleTattoos