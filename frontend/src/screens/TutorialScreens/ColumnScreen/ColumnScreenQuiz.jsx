import React, { useState, useEffect } from "react";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";

import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";
import ColumnarTable  from "../../../components/Tables/ColumnarTable/ColumnarTable";

function ColumnScreenQuiz() {

    return(
        
        <div className="caesar2-screen">
            <div className="caesar2-background">
                
                <h2 className = "h-2"> Quiz Time!</h2>
                <h4> Can you encrypted 'QUIZTIME' into a message with the Key being 'KEY'?</h4>
                
                <hr className="border-line"/>

                <AnswerCheck correctAnswer="UTEQZMII" hint ="Use the table below to get your answer!"/>

                <ColumnarTable />
               
                <NavigationButtonBack to="/column"/>

            </div>
        </div> 
    );

    
}

export default ColumnScreenQuiz;