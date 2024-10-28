import { useState } from "react";
import {Card} from "../card/Card";
import { useLocation } from "react-router-dom";
import './Set.css';

export function Set(){
    const location = useLocation();
    const {set} = location.state;

    const cards = require('../../data').filter((item)=>{
        return item.setName === set
    }); 
    
    const [step, setStep] =useState(0);

    const handleNext = () => {
        if(step < cards.length - 1){
            setStep(step + 1)
        }        
    }

    const handlePrev = () => {
        if(step > 0) {
            setStep(step - 1)
        }
        
    }

    return(
        <div>
            <h2>Название набора</h2>
            <Card 
                key = {cards[step].id}
                front = { cards[step].front }
                back = { cards[step].back } 
            />
            <div className="control-panel">
                <button 
                    className="btn-control"
                    disabled = { step == 0 ? true : false}
                    onClick={handlePrev}
                > 
                &lt; 
                </button>

                <p> {step + 1} / {cards.length}</p>

                <button
                    className="btn-control"
                    disabled = { step == cards.length - 1 ? true : false}
                    onClick={handleNext}
                > 
                &gt; 
                </button>
            </div>
        </div>
    );
}