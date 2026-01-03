import { createContext, useEffect, useState } from 'react';
import { account } from "../lib/appwrite";
import { ID } from 'appwrite';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession({ email, password })
            const response = await account.get();
            setUser(response)
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
    }

    async function register(email, password) {
        try {
            await account.create({ userId: ID.unique(), email: email, password: password })
            await login(email, password)
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
    }

    async function logout() {
        await account.deleteSessions();
        setUser(null);
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get();
            setUser(response)
        }

        catch (e) {
            setUser(null)
        } finally {
            setAuthChecked(true)
        }
    }

    useEffect(() => {
      getInitialUserValue()
    }, []);


    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}
