import React, { Component } from 'react';

var FunctionalComponent=(props)=> {
   
const fecha = new Date();
    

    return (
        <div>
                    <h1>UMG Reu</h1>
    <h3>Fecha: {fecha.getUTCMonth()}/{fecha.getUTCDay()}/{fecha.getUTCFullYear()}</h3>
        </div>
    );
}

export default FunctionalComponent