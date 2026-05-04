import { useState } from 'react';
import * as d3 from 'd3';
import ChartDraw from './ChartDraw.js';

const Chart = (props) => {
  const [ox, setOx] = useState('Название клуба');
  const [oy, setOy] = useState([true, false, false, false]);
  const [chartType, setChartType] = useState('Столбчатая диаграмма');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nextOy = [
      form.oyMaxTitles.checked,
      form.oyMinTitles.checked,
      form.oyMaxSeasons.checked,
      form.oyMinSeasons.checked
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
      const titlesValues = entry[1].map((d) => d['Титулы Чемпионата']);
      const seasonsValues = entry[1].map((d) => d['Сезонов в ЛЧ']);
      
      const titlesMinMax = d3.extent(titlesValues);
      const seasonsMinMax = d3.extent(seasonsValues);
      
      arrGraph.push({ 
        labelX: entry[0], 
        values: [titlesMinMax[1], titlesMinMax[0], seasonsMinMax[1], seasonsMinMax[0]]
      });
    }

    if (selectedOx === 'Год основания') {
      arrGraph.sort((a, b) => Number(a.labelX) - Number(b.labelX));
    } else {
      arrGraph.sort((a, b) => String(a.labelX).localeCompare(String(b.labelX), 'ru'));
    }

    return arrGraph;
  };

  return (
    <div className="chart-panel">
      <h4>Визуализация данных футбольных клубов</h4>
      <form onSubmit={handleSubmit}>
        <p>Значение по оси OX:</p>
        <div>
          <input type="radio" name="ox" value="Название клуба" defaultChecked={ox === 'Название клуба'} />
          Название клуба
          <br />
          <input type="radio" name="ox" value="Страна" defaultChecked={ox === 'Страна'} />
          Страна
          <br />
          <input type="radio" name="ox" value="Год основания" defaultChecked={ox === 'Год основания'} />
          Год основания
        </div>
        
        <p>
          Значение по оси OY:
        </p>
        <div onChange={() => setError('')}>
          <input type="checkbox" name="oyMaxTitles" defaultChecked={oy[0] === true} />
          Максимальное количество титулов в Чемпионате
          <br />
          <input type="checkbox" name="oyMinTitles" defaultChecked={oy[1] === true} />
          Минимальное количество титулов в Чемпионате
          <br />
          <input type="checkbox" name="oyMaxSeasons" defaultChecked={oy[2] === true} />
          Максимальное количество сезонов в ЛЧ
          <br />
          <input type="checkbox" name="oyMinSeasons" defaultChecked={oy[3] === true} />
          Минимальное количество сезонов в ЛЧ
        </div>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <p>
          <label>Тип диаграммы: </label>
          <select name="chartType" defaultValue={chartType}>
            <option>Столбчатая диаграмма</option>
            <option>Точечная диаграмма</option>
          </select>
        </p>
        <p>
          <button type="submit">Построить</button>
        </p>
      </form>
      {!error && <ChartDraw data={createArrGraph(props.data, ox)} oy={oy} chartType={chartType} />}
    </div>
  );
};

export default Chart;