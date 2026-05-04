import './CSS/App.css';
import clubs from './data';
import Table from './components/Table';
import Chart from './components/Chart';
import { useState } from 'react';

function App() {
  const [filteredDataForChart, setFilteredDataForChart] = useState(clubs);

  const handleFilterChange = (newFilteredData) => {
    setFilteredDataForChart(newFilteredData);
  };

  return (
    <div className="App">
      <h3 className="App-title">Футбольные клубы</h3>
      <Chart data={filteredDataForChart} />
      <Table 
        data={clubs} 
        amountRows={25} 
        showPagination={true} 
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;