import { Link, useParams } from "react-router-dom";

const Criteria = ({ stkData }) => {
    let { stkId } = useParams();
    let count = 0;
    const subData = stkData.filter((data) => data.id == stkId);
    return (
        <div className="App">
            {/* checking data available or not */}
            {subData.length > 0 ? 
            (
                /* heading and subheading from criteria */
                <div>
                    <div className="criteria_heading">
                        <div className="criteria_title">{subData[0].name}</div>
                        <small style={{ color: `${subData[0].color}` }}>
                            {subData[0].tag}
                        </small>
                    </div>

                    <ul>
                        {
                            /* changing each $ variables with respect to there values */
                            subData.length > 0 ?
                            subData[0].criteria.map((criData,criIndex)=>{
                                /* spliting data so we get $1 and $2 as seperate values */
                                let text = criData.text.split(' ');
                                 return (
                                    <li key={criIndex} className="criteria-list">
                                        {text.map((textData,textIndex)=>{
                                            let link;
                                            if(textData.includes('$')){
                                                /* changing $ variables wrt their values and default_values */
                                                 link = criData.variable[textData].hasOwnProperty('values') ? criData.variable[textData].values[0] : criData.variable[textData].default_value
                                            }
                                            
                                             return(
                                                <span key={textIndex}>
                                                    {  
                                                       text.length > 1 && textData.includes('$')? (
                                                        /* setting params for stockid to access them as differently*/
                                                        <Link to={`/page/${stkId}/${criIndex}/${++count}`}>
                                                            ({link})
                                                        </Link>
                                                    ) : (
                                                        textData +'  '  
                                                    )}
                                                </span>
                                            ) 
                                        })}
                                        
                                        {1+criIndex < subData[0].criteria.length && (
                                            <small>and</small>
                                        )}
                                    </li>
                                )
                            }):" "
                        }
                    </ul>
                    
                </div>
            ) 
            : (
                " "
            )}
        </div>
    );
};
export default Criteria;
