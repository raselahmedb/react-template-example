import {useContext} from 'react'
import UserContext from './../context/UserContext'
import UserContextType from './../types/UserContextType';

function Profile() {
    // const {user} = useContext(UserContext)
    const uerContextType: UserContextType | null = useContext(UserContext);
    
    if (!uerContextType?.user) return <div>please login</div>

    return <div>Welcome {uerContextType?.user.username}</div>
}

export default Profile