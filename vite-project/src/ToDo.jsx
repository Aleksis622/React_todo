import { useState } from 'react'
function ToDo({ task, completed }) {
    const [check, setCheck] = useState(completed);
    return (
        <input
        type="checkbox"
        checked={check}
        onChange={() => setCheck(!check)}
      />
    );
  }
  
  export default ToDo
  