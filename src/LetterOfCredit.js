import React, { Component } from 'react';
import AppNav from './AppNav';

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
        return ( 
            <div>
                <AppNav/>
                <h2>Letters of Credit</h2>
                {
                    LettersOfCredit.map( lc => 
                        <div id={lc.id}>
                            {lc.ref_no}
                        </div>)
                }
            </div>

         );
    }
}
 
export default LetterOfCredit;