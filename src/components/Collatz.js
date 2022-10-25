import React, { Component } from 'react';

export default class Collatz extends Component {
  
    generarCollatz = () => {
        var numCollatz = this.props.numeroCollatz;
        

        var valor = parseInt(this.cajaNumero.current.value);
            var aux = [];
            while(valor != 1){
                if(valor % 2 == 0) {
                    valor /= 2
                }else{
                    valor = valor * 3 + 1
                }
                aux.push(valor);
            }
            this.setState({
                numeros: aux
            });
    }   
  
  
    render() {
    return (
      <div>Collatz</div>
    )
  }
}
