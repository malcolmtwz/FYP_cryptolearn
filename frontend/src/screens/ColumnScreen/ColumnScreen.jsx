import React, { useState, useEffect } from "react";
import "./ColumnScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";
import ColumnEncrypter from "../../components/ColumnEncrypter/ColumnEncrypter";
import AlphabetTable from "../../components/AlphabetTable/AlphabetTable";
import ColumnExampleTable from "../../components/ColumnExampleTable/ColumnExampleTable";
import ColumnExampleTable2 from "../../components/ColumnExampleTable2/ColumnExampleTable2";

function ColumnScreen() {

    return(
        
        <Background>
            <h2 className = "title"> Columnar Transposition Cipher</h2>
            <h4> An encryption method that scrambles plaintext using a 'Key' and columns! </h4>
            
            <hr className="border-line"/>

            <h5> Lets use an example of a keyword being 'BREAD' and our plaintext being 'HELLOWORLD'.</h5>

            <p> First of, a keyword like 'BREAD' would be of length 5. </p>
            <p> The alphabetical order of this keyword would be ' 2 5 4 1 3 ' based on the table below.</p>

            <AlphabetTable/><p/>

            <p> Now, list out the keyword numbers alongside the plaintext in columns as such: </p>

            <ColumnExampleTable /><p/>

            <p> Once you got the table, construct the ciphertext by ordering the letters based on the numbered columns</p>

            <ColumnExampleTable2 /><p/>

            <p>Therefore, our ciphertext would be 'LLHWODLREO'</p>

            <hr className="border-line"/>
            
            <ColumnEncrypter />

            <hr className="border-line"/>

            <NavigationButton to="/temp-page"/>

        </Background>
    );
}

export default ColumnScreen;