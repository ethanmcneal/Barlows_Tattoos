const FinishedTattoos = (props) => {
    const {tattoo} = props
    return(
         <div>
          {<h1>{tattoo.title}</h1> }
        </div>
    )
}
export default FinishedTattoos