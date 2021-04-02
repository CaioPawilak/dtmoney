
import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionTable } from '../TransactionsTable';
import { useEffect } from "react";
import { api } from "../../services/api";

export function Dashboard() {
    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])

    return (
        <>
            <Container>
                <Summary />
                <TransactionTable />
            </Container>
        </>
    )

}