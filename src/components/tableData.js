
import { useState, useEffect } from "react";

function TableDataComponents(props) {
    console.log(props)
    // destructuring
    const { TableData, configData } = props;

    const KeyStore = Object.keys(TableData[0])
    console.log(KeyStore)
    // Set State
    const [sorting, setSorting] = useState({ key: "city", ascending: true });
    // 
    const [currentData, setCurrentData] = useState(TableData);
    //  
    useEffect(() => {
        const currentDataCopy = [...currentData];
        // sort String by Property
        const sortedCurrentData = currentDataCopy.sort((a, b) => {
            // to get the name key inside the person object
            if (sorting.key === "person") {
                return a.person.name.localeCompare(b.person.name)
            }
            return a[sorting.key].localeCompare(b[sorting.key]);
        });
        // Using Dependency
        setCurrentData(
            sorting.ascending ? sortedCurrentData : sortedCurrentData.reverse()
        );
    }, [sorting]);
    // onclick func for sorting
    function applySorting(key, ascending) {
        setSorting({ key: key, ascending: ascending });
    }
    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        {configData.map((ele, index) => {
                            return (
                                <th key={index} className="Img-Content">
                                    {/* change the Heading Title */}
                                    {
                                        ele.colName === "person" ?
                                            "name" :
                                            ele.colName === "email" ?
                                                "email Address"
                                                :
                                                ele.colName === "joiningDate" ?
                                                    "joining Date"
                                                    :
                                                    ele.colName
                                    }
                                    {/* Sorting icon by onClick */}
                                    {ele.sortVisible ? <img className="up-down" src="/Assets/up-down.png" onClick={() => applySorting(ele.colName, !sorting.ascending)} /> : ""}
                                </th>
                            )
                        }
                        )}

                    </tr>
                </thead>
                <tbody>
                    {/*  map func used to show data one by one */}
                    {currentData.map((dataEle, index) => {
                        return (
                            <tr key={index}>
                                {
                                    configData.map((ele, index) => {
                                        return ele.colName === "person" ?
                                            (
                                                <td key={index} className="Img-Content">
                                                    <img className="profile" src={`/Assets/${dataEle.person.avatar}`} />
                                                    <span>{dataEle.person.name} </span> </td>
                                            ) :
                                            ele.colName === "email" ?
                                                (<td
                                                    key={index}>
                                                    {/* Email link attached */}
                                                    <a href="#"> {dataEle.email} </a>
                                                </td>)

                                                :
                                                // Show other Data
                                                (
                                                    <td key={index}>{dataEle[ele.colName]}</td>
                                                )
                                    }
                                    )
                                }

                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default TableDataComponents;
