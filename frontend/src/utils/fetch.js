export const fetchCustomers = async () => {
    const res = await fetch('http://localhost:8080/api/customer/getallcustomers')
    const json = await res.json()
    return json
}
