import { type JSX } from 'react';
import {Navigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

interface PrivateRouteProps {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const {token} = useAuth();

    if(!token){
        return <Navigate to="/login" replace/>
    }

    return children;
}
