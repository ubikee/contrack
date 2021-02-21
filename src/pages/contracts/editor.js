import React, { useContext, useEffect, useState } from "react";
import { Content, Header, Text, ContentForm, Button } from "ywana-core7";
import { AppContext } from "../../AppContext";
import { CONTRACT } from '../../schema'
import './editor.css'

/**
 * Contract Editor
 */
export const ContractEditor = () => {
    const context = useContext(AppContext);
    const { contract } = context;

    if (!contract) return <div>select contract</div>;

    function deleteContract() {
        const { id } = contract
        context.deleteContract(id)
    }

    const Contract = new Content(CONTRACT, contract)
    const icon = { icon: 'description' }
    const title = <Text use="headline6">{contract.description}: {contract.affected}</Text>
    return (
        <div className="contract-editor">
            <Header icon={icon} title={title}>
                <Button label="DELETE" action={deleteContract} />
            </Header>
            <ContentForm content={Contract} />
        </div>
    );
};
