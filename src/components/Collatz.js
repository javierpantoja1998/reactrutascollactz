import React, { Component } from 'react';

export default class Collatz extends Component {
  
    //Creamos el state y guardamos el array para collatz
    state = {
        arrayCollatz:[]
    }
    //Creamos el metodo para generar el Collazt
    generarCollatz = () => {
        //Recogemos el numero del prop numeroCollatz y recogemos su variable
        //LO recogemos de menuRutas y lo parseamos para convertirlo en int
        var numCollatz = parseInt(this.props.numeroCollatz);
        //Definimos la variable para meter el array de los Collatz
        var numeros = [];
        
        
        //Hacemos el while para calcular el metodo Collatz 
            while(numCollatz != 1){
                if(numCollatz % 2 == 0) {
                    numCollatz /= 2
                }else{
                    numCollatz = numCollatz * 3 + 1
                }
                //Metemos los numeros del collatz al array numeros
                numeros.push(numCollatz);
                
            }
            //Cambiamos el state y metemos los numeros del collatz
            this.setState({
                arrayCollatz: numeros

            });
    }   
    //LLamamos a la funcion DidMount 
    // para cargar la funcion de generarCollatz
    componentDidMount = () => {
        this.generarCollatz()
    }
    //LLamamos  a la funcion DidUpdate
    //Para actualizar los resultados
    componentDidUpdate = (oldProp) => {
        //Comprobamos que el nuevo numero es distinto del antiguo
        //Comparamos el prop nuevo con el antiguo
        if(this.props.numeroCollatz !== oldProp.numeroCollatz){
            this.generarCollatz();
        }
        
    }
  
    render() {
    return (
      <div>
        <h1>{this.props.numeroCollatz}</h1>
        <ul>
            {
                this.state.arrayCollatz.map((valor,index)=>{
                    
                    return (<li key={index}>{valor}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
