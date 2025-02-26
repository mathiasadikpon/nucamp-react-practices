import { useRef, useState } from "react";
function UsinfRef(){
    const valueWithRef = useRef('not clicked yet');
    let valuewithoutRef = 'not clicked yet';

    const[timeClicked, updateClicked] = useState(0);

    const hansleClick = () => {
        valueWithRef.current = "CLICKED!!";
        valuewithoutRef = "CLICKED!!";
        
    }


    return(<div>

    </div>);
};

export default UsinfRef;