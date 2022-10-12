import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Variable = ({ stkData }) => {
    //For setting all params value to define relation
    const { stkId, criteriaId, varId } = useParams();
    const [value, setValue] = useState([]);
    const [indicator, setIndicator] = useState([]);
    const subData = stkData.filter((data) => data.id == stkId);

    useEffect(() => {
        //$ variable value
        let dlrVariable = `$${varId}`;
        
            //checking each vsriable values to show
            if (
                subData[0].criteria[criteriaId].variable[dlrVariable].type ===
                "value"
            ) {
                setValue(
                    subData[0].criteria[criteriaId].variable[dlrVariable].values
                );
            }
            if (
                subData[0].criteria[criteriaId].variable[dlrVariable].type ===
                "indicator"
            ) {
                setIndicator(
                    subData[0].criteria[criteriaId].variable[dlrVariable]
                );
            }
        
    }, [stkData]);
    
    return (
        <div className="App">
            {Object.keys(value).length !== 0 && (
                <ul >
                    {
                        value.sort((a,b)=>a-b).map((d, i) => 
                        {
                            return <li key={i} className="listView" style={{ listStyle: "none" }}>{d}</li>;
                        })
                    }
                </ul>
            )}
            {/* set parameter value with input*/}
            {
            indicator.length !== 0 && (
                <div className="indicator-type">
                    <h3>{indicator.study_type}</h3>
                    <p>Set Parameter</p>
                    <div className="input-container">
                        <div className="input-label">{indicator.parameter_name}</div>
                        <input type="text" onChange={(e) => e.target.value} defaultValue={indicator.default_value} />
                    </div>

                </div>
            )
            }
        </div>
    );
};

export default Variable;
