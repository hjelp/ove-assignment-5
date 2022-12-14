import { useContext, FC} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


const WithoutAuth  = (Component: FC) => (props: JSX.IntrinsicAttributes) => {
    const [user, ] = useContext(UserContext);
    if(user === null)
        return <Component {...props} />
    return <Navigate to="/translations" />
 
} 

export default WithoutAuth;
