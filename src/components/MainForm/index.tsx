import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
    return(
         <form className="form">
                    <div className="formRow">
                        <DefaultInput
                         labelText= 'task'
                         id='meuInput'
                         type='text'
                         placeholder='insira o nome da tarefa'
                         />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor </p>
                    </div>

                    <div className="formRow">
                        <Cycles/>
                    </div>
                 
                    <div className="formRow">
                        <DefaultButton
                        icon={<PlayCircleIcon/>}
                        color = 'green'/>
                    </div>
                </form>
    );
}