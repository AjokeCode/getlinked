import { createContext, useRef,  } from "react";


export const context = createContext();
const Context = ({children})=>{
    const initialStates = Array(3).fill(null);
    const ref = useRef(initialStates);
    const handleClick =()=>{
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return(
        <context.provider value={{handleClick, ref}}>
            {children}
        </context.provider>
        )

}

export default Context;