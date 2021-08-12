import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';


const Logout = () => {

    let history = useHistory()
    const { updateToken } = useContext(UserContext)


    useEffect(() => {

        localStorage.removeItem('id_token')
        updateToken()

        setTimeout(() => {

            history.push("/")
            
        }, 100)

    }, [])
    
    return (<div>Logout</div>)
  };


  export default Logout
  