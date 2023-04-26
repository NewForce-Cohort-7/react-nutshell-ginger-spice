import { useState } from "react"

export const Tasks = ( {task, isChecked, handleCheckboxChange } ) => {



       {
           return <>
            <div>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                {task.name} (complete by: {task.finishDate})
            </div>

    </>  
    
}
    
}


