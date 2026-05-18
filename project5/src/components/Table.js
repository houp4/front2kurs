// src/components/Table.js
import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Filter from "./Filter";
import SortLevels from "./SortLevels";

const Table = (props) => {
    const [activePage, setActivePage] = useState("1");
    const { 
        showPagination = true, 
        amountRows = 1, 
        data: fullData, 
        onFilterChange 
    } = props;

    const changeActive = (event) => {
        setActivePage(event.target.textContent);
    };

    const paginationEnabled = showPagination !== false;
    const rowsAmount = Number(amountRows) || 1;

    const [filteredData, setFilteredData] = useState(() => [...fullData]);
    const [sortedData, setSortedData] = useState(() => [...filteredData]);
    const [sortMountKey, setSortMountKey] = useState(0);

    useEffect(() => {
        onFilterChange(filteredData);
    }, [filteredData, onFilterChange]);

    const updateFiltered = (value) => {
        setFilteredData(value);
        setSortedData(value);
        setActivePage("1");
        setSortMountKey(prev => prev + 1);
    };

    const updateSort = (sorted) => {
        setSortedData(sorted);
        setActivePage("1");
    };

    const handleFiltersCleared = () => {
        setFilteredData([...fullData]);
        setSortedData([...fullData]);
        setActivePage("1");
        setSortMountKey(prev => prev + 1);
    };

    const maxPage = Math.max(1, Math.ceil(sortedData.length / rowsAmount));
    const currentPageNum = Math.min(Math.max(1, parseInt(activePage, 10)), maxPage);
    const validActivePage = String(currentPageNum);

    if (validActivePage !== activePage) {
        setActivePage(validActivePage);
    }

    const pageCount = Math.max(1, Math.ceil(sortedData.length / rowsAmount));
    const columnKeys = fullData.length > 0 ? Object.keys(fullData[0]) : [];

    const pages = Array.from({ length: pageCount }, (_, i) => i + 1).map((item) => (
        <span
            key={item}
            className={Number(activePage) === item ? "active" : ""}
            onClick={changeActive}
        >
            {item}
        </span>
    ));

    return (
        <>
            <details>
                <summary><b>Фильтр</b></summary>
                <Filter
                    filtering={updateFiltered}
                    fullData={fullData}
                    onFiltersCleared={handleFiltersCleared}
                />
            </details>

            <details>
                <summary><b>Сортировка</b></summary>
                <SortLevels
                    key={sortMountKey}
                    columns={columnKeys}
                    currentData={filteredData}
                    onApply={updateSort}
                />
            </details>

            <table className="cars-table">
                <TableHead head={columnKeys} />
                <TableBody
                    body={sortedData}
                    amountRows={amountRows}
                    numPage={activePage}
                    paginate={paginationEnabled}
                />
            </table>

            {paginationEnabled && <div id="pag">{pages}</div>}
        </>
    );
};

export default Table;