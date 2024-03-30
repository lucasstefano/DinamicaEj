import React, { useState, ChangeEvent } from 'react';
import { SInputDiv, ScreenDiv } from "./style";
import { redirect } from 'react-router';
import useHistory  from 'react-router-dom'; // Import useHistory hook and History type

export default function NewCard(){
    const [input1Value, setInput1Value] = useState<string>('');
    const [input2Value, setInput2Value] = useState<string>('');

    const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setInput1Value(event.target.value);
    };

    const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setInput2Value(event.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission or any other action
        console.log("Input 1 value:", input1Value);
        console.log("Input 2 value:", input2Value);
        
    };

    return(
        <ScreenDiv>
     
                <input type="text"  placeholder='name' value={input1Value} onChange={handleInputChange1} />
           
                <input type="text" value={input2Value}  placeholder='email' onChange={handleInputChange2} />
          
            <button onClick={handleSubmit}>Enviar</button>
            <a style={{fontSize:20,color:'white'}} href='/'>voltar</a>
        </ScreenDiv>
    );
}
