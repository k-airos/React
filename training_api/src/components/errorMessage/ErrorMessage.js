import errorGif from './error.gif';

const ErrorMessage = () =>{
    return(
        <img style={{display:'block', objectFit:'contain', margin: 'auto auto'}} src={errorGif} alt="error" />
    )
}

export default ErrorMessage;