import {createContext, useEffect, useState} from "react";
import {useCookies, CookiesProvider} from "react-cookie";

const AuthContext = createContext({
    isAuth: false,
    user: null,
    signIn: () => {
    },
    signOut: () => {
    }
});

export default AuthContext;

export const AuthContextProvider = props => {

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [cookie, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {

        if (cookie.isAuth && cookie.token && cookie.userData) {
            setIsAuth(cookie.isAuth === 'true');
            setToken(cookie.token);
            setUser(cookie.userData);
        }

    }, []);

    const signIn = (token, user) => {
        setIsAuth(true);
        setToken(token);
        setUser(user);
        const stringUser = JSON.stringify(user);

        const expires = new Date();
        expires.setDate(expires.getDate()+30);

        setCookie('isAuth', true, {path: '/', expires: expires});
        setCookie('token', token, {path: '/', expires: expires});
        setCookie('userData', user, {path: '/', expires: expires});
    }

    const signOut = () => {
        setIsAuth(false);
        setToken(null);
        setUser(null);

        removeCookie('isAuth');
        removeCookie('token');
        removeCookie('user');
    }

    return (
        <CookiesProvider>
            <AuthContext.Provider value={{isAuth, token, user, signIn, signOut}}>
                {props.children}
            </AuthContext.Provider>
        </CookiesProvider>
    )
}