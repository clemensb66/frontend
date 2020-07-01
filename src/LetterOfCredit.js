import React, { Component } from 'react';
import AppNav from './AppNav';
import { Container, Table } from 'reactstrap';

class LetterOfCredit extends Component {
    state = { 
        isLoading: true,
        LettersOfCredit: [] 
     }

     async componentDidMount(){
         const response = await fetch('/allLcs');
         const body = await response.json();
         this.setState({LettersOfCredit: body, isLoading: false});
     }
    render() { 
        const {LettersOfCredit, isLoading} = this.state;
        if(isLoading){
            return (<div>Loading...</div>)
        }

        let rows = LettersOfCredit.map( lc => 
            <tr>
                <td>{lc.ref_no}</td>
                <td>{lc.lc_status}</td>
                <td>{lc.issueDate}</td>
                <td>{lc.createdAt}</td>
                <td>{lc.confirmed_amount}</td>
            </tr>
            )
        return ( 
            <div>
                <AppNav/>
                <h2>Letters of Credit</h2>
                {
                //    LettersOfCredit.map( lc => 
                //        <div id={lc.id}>
                //            {lc.ref_no}
                //        </div>)
                }
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>Deal Id</th>
                                <th>Status</th>
                                <th>Issue Date</th>
                                <th>Created On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Container>
            </div>

         );
    }
}
 
export default LetterOfCredit;