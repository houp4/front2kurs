// src/components/Chart.js
import { useState } from 'react';
import * as d3 from 'd3';
import ChartDraw from './ChartDraw';

const Chart = (props) => {
  const [ox, setOx] = useState('Тип');
  const [oy, setOy] = useState([false, false, false, false]);
  const [chartType, setChartType] = useState('bar');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nextOy = [
      form.minPower.checked,
      form.avgPower.checked,
      form.maxPower.checked,
      form.avgRating.checked
    ];

    if (!nextOy[0] && !nextOy[1] && !nextOy[2] && !nextOy[3]) {
      setError('Выберите минимум одно значение по оси OY.');
      return;
    }
    setError('');
    setOx(form.ox.value);
    setOy(nextOy);
    setChartType(form.chartType.value);
  };

  const createArrGraph = (data, selectedOx) => {
    const grouped = d3.group(data, (d) => d[selectedOx]);
    const arrGraph = [];

    for (const entry of grouped) {
      const powerValues = entry[1].map((d) => d['Мощность']);
      const ratingValues = entry[1].map((d) => d['Рейтинг']);
      
      const minPower = d3.min(powerValues);
      const maxPower = d3.max(powerValues);
      const avgPower = d3.mean(powerValues);
      const avgRating = d3.mean(ratingValues);
      
      arrGraph.push({ 
        labelX: entry[0], 
        values: [minPower, avgPower, maxPower, avgRating]
      });
    }

    if (selectedOx === 'Мощность' || selectedOx === 'Цена' || selectedOx === 'Рейтинг' || selectedOx === 'Расход') {
      arrGraph.sort((a, b) => Number(a.labelX) - Number(b.labelX));
    } else {
      arrGraph.sort((a, b) => String(a.labelX).localeCompare(String(b.labelX), 'ru'));
    }

    return arrGraph;
  };

  return (
    <details>
      <summary><b>График</b></summary>
      <div className="chart-panel">
        <form onSubmit={handleSubmit}>
          <b>Значение по оси ОХ:</b><br />
          <div>
            <input type="radio" name="ox" value="Тип" defaultChecked={ox === 'Тип'} />
            Тип
            <br />
            <input type="radio" name="ox" value="Страна" defaultChecked={ox === 'Страна'} />
            Страна
          </div>
          
          <div className="form-group">
            <b>Результат:</b><br />
            <div onChange={() => setError('')}>
              <input type="checkbox" name="minPower" defaultChecked={oy[0]} />
              Минимальная мощность
              <br />
              <input type="checkbox" name="avgPower" defaultChecked={oy[1]} />
              Средняя мощность
              <br />
              <input type="checkbox" name="maxPower" defaultChecked={oy[2]} />
              Максимальная мощность
              <br />
              <input type="checkbox" name="avgRating" defaultChecked={oy[3]} />
              Средний рейтинг
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <b>Тип диаграммы:</b><br />
          <div>
            <label>
              <input type="radio" name="chartType" value="bar" defaultChecked={chartType === 'bar'} />
              Столбчатая
            </label>
            <br />
            <label>
              <input type="radio" name="chartType" value="scatter" defaultChecked={chartType === 'scatter'} />
              Точечная
            </label>
            <br />
            <label>
              <input type="radio" name="chartType" value="line" defaultChecked={chartType === 'line'} />
              Линейный график
            </label>
          </div>
          <br />
          
          <button type="submit">Построить график</button>
        </form>
        
        {!error && <ChartDraw data={createArrGraph(props.data, ox)} oy={oy} chartType={chartType} />}
      </div>
    </details>
  );
};

export default Chart;