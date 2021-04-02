import { Container } from "./styles";

export function TransactionTable () {
    return(
        <Container>
           <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Cartegoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>31/02/1524</td>
                    </tr>
                    <tr>
                        <td>Aluguel do carro</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Desenvolvimento</td>
                        <td>01/05/1624</td>
                    </tr>
                
                </tbody>
            </table>
        </Container>
    );

}