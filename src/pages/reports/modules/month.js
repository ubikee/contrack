import React from "react";
import { DataTable, Header, Text } from "ywana-core7";
import "./month.css";
import { RadialChart, VerticalBarSeries, XAxis, XYPlot, YAxis } from "react-vis";

/**
 * Month Report
 */
export const MonthReport = ({ contracts }) => {
    const expenses = contracts.filter((contract) => contract.client === "ME");
    const incomes = contracts.filter((contract) => contract.client !== "ME");

    const expensesTable = {
        columns: [
            { id: "affected", label: "Affected"},
            { id: "description", label: "Description" },
            { id: "cost", label: "€" },
        ],
        rows: expenses.map((contract) => ({
            affected: contract.affected,
            description: contract.description,
            cost: contract.payment,
        })),
    };

    const incomesTable = {
        columns: [
            { id: "affected", label: "Affected"},
            { id: "description", label: "Description" },
            { id: "cost", label: "€" },
        ],
        rows: incomes.map((contract) => ({
            affected: contract.affected,
            description: contract.description,
            cost: contract.payment,
        })),
    };

    const expensesData = expenses.map((contract) => ({ angle: contract.payment }));
    const incomesData = incomes.map((contract) => ({ angle: contract.payment }));

    const expensesSum = expenses.reduce((sum, contract) => sum + parseFloat(contract.payment), 0);
    const incomesSum = incomes.reduce((sum, contract) => sum + parseFloat(contract.payment), 0);
    const data = [
        { x: 0, y: expensesSum, color: 1, label: 'xxx' },
        { x: 1, y: incomesSum, color: 2, label: 'yy'},
    ];

    console.log(data)

    const title = <Text use="headline6">Monthly Report</Text>;
    return (
        <div className="month-report">
            <Header title={title}></Header>
            <main>
                <div>
                    <Header title="Expenses"></Header>
                    <RadialChart data={expensesData} width={150} height={150} />
                    <DataTable {...expensesTable} />
                </div>
                <div>
                    <XYPlot width={200} height={200}>
                        <VerticalBarSeries data={data} />
                    </XYPlot>
                </div>
                <div>
                    <Header title="Incomes"></Header>
                    <RadialChart data={incomesData} width={150} height={150} />
                    <DataTable {...incomesTable} />
                </div>
            </main>
            <footer>Total</footer>
        </div>
    );
};
