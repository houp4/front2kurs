// src/App.js
import './CSS/App.css';
import { useState } from 'react';
import { cars } from './data';
import Table from './components/Table';
import Chart from './components/Chart';

function App() {
  const [filteredDataForChart, setFilteredDataForChart] = useState(cars);

  const handleFilterChange = (newFilteredData) => {
    setFilteredDataForChart(newFilteredData);
  };

  return (
    <div className="App">
      <h1 className="title">АвтоРейтинг</h1>
      <hr className="line" />
      
      <Chart data={filteredDataForChart} />
      
      <Table 
        data={cars} 
        amountRows={25} 
        showPagination={true} 
        onFilterChange={handleFilterChange}
      />

    </div>
  );
}

export default App;