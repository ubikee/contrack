import React, { useState } from 'react'
import API from './AppAPI'
import firebase from './firebase'

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {

    const [contracts, setContracts] = useState([])
    const [contract, setContract] = useState()

    function login(email, password) {
        firebase.login(email, password)
    }

    function addAuthenticationListener(onLogin) {
        firebase.auth.onAuthStateChanged(user => {
            if (user) {
                if (onLogin) onLogin(user)
            } else {
                console.log('NOT LOGGED')
            }
        });
    }

    async function loadContract(token) {
        const response = await API.preorders(token)
        setContract(response)
    }

    async function loadContracts() {
        const response = await firebase.contracts()
        setContracts(response)
        return response
    }

    async function createContract(form) {
        await firebase.createContract(form)
    }

    async function selectContract(id) {
        const contract = contracts.find(c => c.id === id)
        setContract(contract)
    }

    async function clearContract() {
        setContract(null)
    }

    async function deleteContract(id) {
        await firebase.deleteContract(id)
        loadContracts()
    }


    const value = {

        login,
        addAuthenticationListener,

        contracts,
        contract,
        loadContract,
        loadContracts,
        createContract,
        selectContract,
        clearContract,
        deleteContract,

    }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}