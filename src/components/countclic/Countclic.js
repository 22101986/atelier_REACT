import { useState } from "react";

function Countclic() {
    const [count, setCount] = useState(0);

    function handleClick() {
        let newCount = count + 1;
        setCount(newCount);
    }

    return (
        <div>
       <button onClick={handleClick} class="btn btn-secondary">Cliquez!</button>
       <p>Vous avez cliqué {count} fois</p>
       </div>
    );
}

export default Countclic;