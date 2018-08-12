import React from "react";

const Array = (props) => {
    return(
        <div>
        { props.array.map((item, index) =>(
            <button className="btn btn-primary" key={index}>{item.name}</button>
         ))}
     </div>
    );
}

export default Array;