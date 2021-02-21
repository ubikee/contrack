import { HTTPClient, Session } from 'ywana-core7'
const http = HTTPClient(window.API || process.env.REACT_APP_API, Session);

/**
 * API json server
 */
const API = {

    sales() {
        return http.GET(`/sales`)
    },
 
    sale(id) {
        return http.GET(`/sales/${id}`)
    },

    addSale(form) {
        const body = JSON.stringify(form)
        return http.POST(`/sales`, body)
    },

    updateSale(id, form) {
        const body = JSON.stringify(form)
        return http.PUT(`/sales/${id}`, body)
    },

    deleteSale(id) {
        return http.DELETE(`/sales/${id}`)
    },

    clearSales() {
        return http.DELETE(`/sales`)
    },

}

export default API
