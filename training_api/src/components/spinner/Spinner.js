import loader from '../../resources/loading.gif'

const Spinner = () =>{
    return(
        <div className="spinner" style={{margin: 'auto auto'}}>
            <img src={loader} alt="loading"/>
        </div>
    )
}
export default Spinner;