import * as d3 from 'd3';
import { useEffect, useMemo, useRef, useState } from 'react';

const ChartDraw = (props) => {
  const chartRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    setWidth(parseFloat(svg.style('width')));
    setHeight(parseFloat(svg.style('height')));
  }, []);

  const  margin = {
		top:10, 
		bottom:60, 
		left:40, 
		right:10
	};

  const boundsWidth = Math.max(0, width - margin.left - margin.right);
  const boundsHeight = Math.max(0, height - margin.top - margin.bottom);
  
  const selectedSeries = props.oy
    .map((isOn, checkboxIndex) => {
      if (!isOn) return null;
      return {
        checkboxIndex,
        valueIndex: checkboxIndex,
      };
    })
    .filter((series) => series !== null);
    
  const valuesY = props.data.flatMap((d) =>
    selectedSeries.map((series) => d.values[series.valueIndex])
  );
  const [min = 0, max = 0] = d3.extent(valuesY);

  const scaleX = useMemo(() => {
    return d3
      .scaleBand()
      .domain(props.data.map((d) => d.labelX))
      .range([0, boundsWidth]);
  }, [props.data, boundsWidth]);

  const scaleY = useMemo(() => {
    const low = min > 0 ? min * 0.85 : min * 1.1;
    const high = max > 0 ? max * 1.1 : max * 0.85;
    return d3
      .scaleLinear()
      .domain([low, high])
      .range([boundsHeight, 0]);
  }, [boundsHeight, min, max]);

  const seriesColor = (checkboxIndex) => {
    switch(checkboxIndex) {
      case 0: return '#2ee41a';
      case 1: return '#1083e1';
      case 2: return '#cf1b93';
      case 3: return '#e37c16';
      default: return 'gray';
    }
  };

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    svg.selectAll('*').remove();
    if (!width || !height || !props.data.length || !selectedSeries.length) return;

    svg
      .append('rect')
      .attr('x', margin.left)
      .attr('y', margin.top)
      .attr('width', boundsWidth)
      .attr('height', boundsHeight)
      .style('fill', '#d8d8d8');

    const xAxis = d3.axisBottom(scaleX);
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${height - margin.bottom})`)
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-30)');

    const yAxis = d3.axisLeft(scaleY);
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    if (props.chartType === 'Столбчатая диаграмма') {
      const seriesScale = d3
        .scaleBand()
        .domain(selectedSeries.map((series) => String(series.checkboxIndex)))
        .range([0, scaleX.bandwidth()])
        .padding(0.12);

      svg
        .selectAll('.bar-group')
        .data(props.data)
        .enter()
        .append('g')
        .attr('class', 'bar-group')
        .attr(
          'transform',
          (d) => `translate(${margin.left + scaleX(d.labelX)}, ${margin.top})`
        )
        .selectAll('rect')
        .data((d) =>
          selectedSeries.map((series) => ({
            checkboxIndex: series.checkboxIndex,
            value: d.values[series.valueIndex],
          }))
        )
        .enter()
        .append('rect')
        .attr('x', (d) => seriesScale(String(d.checkboxIndex)))
        .attr('y', (d) => scaleY(d.value))
        .attr('width', seriesScale.bandwidth())
        .attr('height', (d) => boundsHeight - scaleY(d.value))
        .style('fill', (d) => seriesColor(d.checkboxIndex));
    } else {
      selectedSeries.forEach((series, seriesPos) => {
        const dotOffsetX =
          selectedSeries.length === 1 ? 0 : (seriesPos - (selectedSeries.length - 1) / 2) * 8;
        svg
          .selectAll(`.dot-${series.checkboxIndex}`)
          .data(props.data)
          .enter()
          .append('circle')
          .attr('class', `dot-${series.checkboxIndex}`)
          .attr('r', 5)
          .attr('cx', (d) => scaleX(d.labelX) + scaleX.bandwidth() / 2 + dotOffsetX)
          .attr('cy', (d) => scaleY(d.values[series.valueIndex]))
          .attr('transform', `translate(${margin.left}, ${margin.top})`)
          .style('fill', seriesColor(series.checkboxIndex));
      });
    }
  }, [
    boundsHeight,
    boundsWidth,
    height,
    props.chartType,
    margin.bottom,
    margin.left,
    margin.top,
    props.data,
    scaleX,
    scaleY,
    selectedSeries,
    width,
  ]);

  return <svg ref={chartRef} />;
};

export default ChartDraw;