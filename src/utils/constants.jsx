
const SERVER = window.location.hostname === "localhost" || 
               window.location.hostname === "127.0.0.1"
               ? "http://localhost:3333"
               : "https://projeto-2-devinhouse-sgi.herokuapp.com";


export default SERVER;