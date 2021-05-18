const FinishedTattoos = (props) => {
    const {tattoo} = props
    return(
         <div>
          {!tattoo.for_sale && 
            <div className='image-card'> 
              <img src={tattoo.media} alt={tattoo.title} />
            </div>}
        </div>
    )
}
export default FinishedTattoos