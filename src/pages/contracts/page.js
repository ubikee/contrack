import React, { Fragment, useContext, useState, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { ContractEditor } from "./editor";
import { CONTRACT } from "../../schema";
import { Header, GroupList, Text, SiteContext, Button, CreateContentDialog, DropDown } from "ywana-core7";
import "./page.css";

const GROUPS = [
    { label: "Affected", value: "affected" },
    { label: "Service", value: "service" },
    { label: "Provider", value: "provider" },
    { label: "Client", value: "client" },
];

/**
 * Contracts Page
 */
const Page = () => {
    const site = useContext(SiteContext);
    const context = useContext(AppContext);
    const [selected, setSelected] = useState(1);
    const [by, setBy] = useState("affected");

    useEffect(() => {
        context.loadContracts();
    }, []);

    function select(id, c) {
        context.selectContract(id);
    }

    function add() {
        const onOK = (form) => context.createContract(form);
        site.openDialog(<CreateContentDialog label="Create Contract" type={CONTRACT} onOK={onOK} />);
    }

    function changeGroup(id, value) {
        setBy(value);
    }

    const items = context.contracts.map((contract) => ({
        id: contract.id,
        icon: "description",
        title: contract.description,
        text: contract.service,
        ...contract,
    }));

    const title = <Text>CONTRACTS</Text>;
    return (
        <Fragment>
            <Header title={title}>
                <Button label="ADD" action={add} />
            </Header>
            <menu>
                <DropDown label="Group By" options={GROUPS} value={by} onChange={changeGroup} />
                <GroupList items={items} group={{ by }} expandAll={true} onSelect={select} selected={selected} />
            </menu>
            <main>
                <ContractEditor />
            </main>
        </Fragment>
    );
};

export default Page;
