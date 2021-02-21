import React, { Fragment, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { Header, Text, SiteContext} from "ywana-core7";
import "./page.css";
import { MonthReport } from './modules/month'

/**
 * Reports Page
 */
const Page = () => {

    const site = useContext(SiteContext);
    const context = useContext(AppContext);
    const { contracts = [] } = context

    useEffect(() => {
        context.loadContracts();
    }, []);

    const title = <Text>REPORTS</Text>;
    return (
        <Fragment>
            <Header title={title}>
            </Header>
            <main>
                <MonthReport contracts={contracts}/>
            </main>
        </Fragment>
    );
};

export default Page;
