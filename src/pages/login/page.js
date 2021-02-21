import React, { useContext } from 'react';
import { SiteContext, LoginBox } from 'ywana-core7'
import { AppContext } from '../../AppContext';
import './page.css';

/**
 * Login Page
 */
const Page = () => {

    const site = useContext(SiteContext)
    const context = useContext(AppContext)

    context.addAuthenticationListener(() => {
        site.goto('REPORTS')
    })

    function login(email, password) {
        context.login(email, password)
    }

    return (
        <main className="login">
            <LoginBox title="ContracK" onOK={login}/>
        </main>
    )
}

export default Page