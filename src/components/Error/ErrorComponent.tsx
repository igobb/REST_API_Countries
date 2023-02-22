interface Error {
    error: {
        name: string,
        message: string
    }
}

const ErrorComponent = ({error}:Error) => {
    return ( <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <p>{error.name}</p>
        <p>{error.message}</p>
    </div> );
}
 
export default ErrorComponent;