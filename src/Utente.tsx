import { Component } from 'react';
import InterfacciaUtente from './InterfacciaUtente';
class ComponentUtente extends Component<InterfacciaUtente, {}>{
    constructor(props: InterfacciaUtente) {
        super(props);
    }
    render() {

        return (
            <div>
                <h1>Dati Personali:</h1>
                <h2>Nome: {this.props.nome}</h2>
                <h2>Cognome: {this.props.cognome}</h2>
                <h2>Sesso: {this.props.sesso}</h2>
            </div>



        )

    }

}
export default ComponentUtente;