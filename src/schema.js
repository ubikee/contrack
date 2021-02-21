import { TYPES } from "ywana-core7";

export const CONTRACT = {
    id: { id: "id", type: TYPES.STRING },

    service: {
        id: "service",
        tye: TYPES.STRING,
        label: "Service",
        required: true,
        options: [
            { value: "SUPPLY", label: "Supply" },
            { value: "RENTAL", label: "Rental" },
            { value: "INSURANCE", label: "Insurance" },
            { value: "OTHER", label: "Other" },
        ],
    },

    affected: {
        id: "affected",
        type: TYPES.STRING,
        label: "Affected",
        required: true,
    },

    provider : { id: "provider", type: TYPES.STRING, label: "Provider", required: true },

    client : { id: 'client', type: TYPES.STRING, label: "Client", required: true },

    description: {
        id: "description",
        type: TYPES.STRING,
        label: "Description",
        required: true,
    },

    init: { id: "init", type: TYPES.DATE, label: "Init Date", required: true },

    length: {
        id: "length",
        type: TYPES.STRING,
        label: "Length",
        required: true,
        default: "YEAR",
        options: [
            { value: "YEAR", label: "Year" },
            { value: "MONTH", label: "Month" },
        ],
    },

    payment: {
        id: "payment",
        type: TYPES.NUMBER,
        label: "Payment",
        required: true,
    },

    frequency: {
        id: "frequency",
        type: TYPES.STRING,
        label: "Frequency",
        required: true,
        options: [
            { value: "YEAR", label: "Year" },
            { value: "MONTH", label: "Month" },
        ],
    },

};
