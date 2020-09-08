import React from "react";

export default function TableRow({data}:{data:string[][]}){
return(
    <>
    {
        data.map((element,key) => (
            <tr key={key}>
                {
                    element.map((d,key)=>(<td key={key}>{d}</td>))
                }
            </tr>
        ))
    }
    </>
)
}
