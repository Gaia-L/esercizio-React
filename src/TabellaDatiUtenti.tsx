import { Component } from 'react';
import { Table } from 'react-bootstrap';
import InterfacciaLista from './InterfacciaLista';
class TabellaUtenti extends Component<InterfacciaLista, {}>{
    constructor(props: InterfacciaLista) {
        super(props);
    }
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Cognome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listaDati.map(utente =>
                            <tr className='active-row'
                                key={utente.id}
                            >
                                <td>{utente.id}</td>
                                <td>{utente.nome}</td>
                                <td>{utente.cognome}</td>
                                <td style={{ color: utente.sesso === 'F' ? '#ff1493' : '#1e90ff' }}>{utente.sesso}</td>
                            </tr>

                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default TabellaUtenti;