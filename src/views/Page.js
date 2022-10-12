import { Link } from "react-router-dom";

const Page = ({ stkData }) => {
    //main page 
    return (
        <div className="App">
            <ul>
                {stkData.map((data, i) => {
                    return (
                        <li key={i} className="listView">
                            <Link to={`${data.id}`}>{data.name}</Link>
                            <small style={{ color: `${data.color}`, display: "block" }}>
                                {data.tag}
                            </small>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Page;
