function createArrGraph(data, key, showMin, showMax, showAvg, showRating) {
    const groupObj = d3.group(data, (d) => d[key]);
    
    const arrGraph = [];
    for (const entry of groupObj) {
        const powerValues = entry[1].map((d) => d["Мощность"]);
        const ratingValues = entry[1].map((d) => d["Рейтинг"]);
        
        const result = { labelX: entry[0], values: [] };
        
        if (showMin) {
            result.minPower = d3.min(powerValues);
            result.values.push(result.minPower);
        }
        if (showMax) {
            result.maxPower = d3.max(powerValues);
            result.values.push(result.maxPower);
        }
        if (showAvg) {
            result.avgPower = d3.mean(powerValues);
            result.values.push(result.avgPower);
        }
        if (showRating) {
            result.avgRating = d3.mean(ratingValues);
            result.values.push(result.avgRating);
        }
        
        arrGraph.push(result);
    }
    
    return arrGraph;
}

function createAxis(svg, data, attrArea) {
    let yValues = [];
    data.forEach(d => {
        yValues = yValues.concat(d.values);
    });

    const min = d3.min(yValues);
    const max = d3.max(yValues);

    const scaleX = d3
        .scaleBand()
        .domain(data.map((d) => d.labelX))
        .range([0, attrArea.width - 2 * attrArea.marginX])
        .padding(0.2);

    const scaleY = d3
        .scaleLinear()
        .domain([min * 0.85, max * 1.1])
        .range([attrArea.height - 2 * attrArea.marginY, 0]);

    const axisX = d3.axisBottom(scaleX);
    const axisY = d3.axisLeft(scaleY);

    svg
        .append("g")
        .attr(
            "transform",
            `translate(${attrArea.marginX}, ${attrArea.height - attrArea.marginY})`
        )
        .call(axisX)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    svg
        .append("g")
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .call(axisY);

    return [scaleX, scaleY];
}

function createScatter(svg, data, scaleX, scaleY, attrArea, color, fieldName, valueIndex, totalFields, splitOverlaps) {
    const r = 5;
    const offset = (valueIndex - (totalFields - 1) / 2) * (r * 1.5);
    
    svg
        .selectAll(`.dot-${fieldName}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", (d) => {
            const baseX = scaleX(d.labelX) + scaleX.bandwidth() / 2;
            if (!splitOverlaps) {
                return baseX + offset;
            }
            return baseX + offset;
        })
        .attr("cy", (d) => scaleY(d[fieldName]))
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .style("fill", color);
}

function createBars(svg, data, scaleX, scaleY, attrArea, color, fieldName, valueIndex, totalFields) {
    const barWidth = scaleX.bandwidth() / totalFields;
    const shift = valueIndex * barWidth;

    svg
        .selectAll(`.bar-${fieldName}`)
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => scaleX(d.labelX) + shift)
        .attr("y", (d) => scaleY(d[fieldName]))
        .attr("width", barWidth - 1)
        .attr("height", (d) => attrArea.height - 2 * attrArea.marginY - scaleY(d[fieldName]))
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .style("fill", color);
}

function createLine(svg, data, scaleX, scaleY, attrArea, color, fieldName) {
    const line = d3.line()
        .x(d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .y(d => scaleY(d[fieldName]))
        .curve(d3.curveLinear);
    
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`);
    
    // Добавляем точки на линии
    svg.selectAll(`.dot-${fieldName}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("r", 4)
        .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", d => scaleY(d[fieldName]))
        .attr("transform", `translate(${attrArea.marginX}, ${attrArea.marginY})`)
        .style("fill", color);
}

function drawGraph(data, dataForm) {
    const keyX = dataForm.keyX;
    const showMin = dataForm.showMin;
    const showMax = dataForm.showMax;
    const showAvg = dataForm.showAvg;
    const showRating = dataForm.showRating;
    const chartType = dataForm.chartType;

    const arrGraph = createArrGraph(data, keyX, showMin, showMax, showAvg, showRating);

    const svg = d3.select("svg");
    svg.selectAll("*").remove();

    const attrArea = {
        width: parseFloat(svg.style("width")),
        height: parseFloat(svg.style("height")),
        marginX: 70,
        marginY: 50
    };

    const [scaleX, scaleY] = createAxis(svg, arrGraph, attrArea);

    const fields = [];
    if (showMin) fields.push({ name: "minPower", color: "blue", label: "Мин. мощность" });
    if (showMax) fields.push({ name: "maxPower", color: "red", label: "Макс. мощность" });
    if (showAvg) fields.push({ name: "avgPower", color: "green", label: "Ср. мощность" });
    if (showRating) fields.push({ name: "avgRating", color: "orange", label: "Ср. рейтинг" });
    
    const totalFields = fields.length;
    const splitOverlaps = totalFields > 1;

    if (chartType === "scatter") {
        fields.forEach((field, idx) => {
            createScatter(svg, arrGraph, scaleX, scaleY, attrArea, field.color, field.name, idx, totalFields, splitOverlaps);
        });
    } else if (chartType === "line") {
        fields.forEach((field) => {
            createLine(svg, arrGraph, scaleX, scaleY, attrArea, field.color, field.name);
        });
    } else {
        fields.forEach((field, idx) => {
            createBars(svg, arrGraph, scaleX, scaleY, attrArea, field.color, field.name, idx, totalFields);
        });
    }
}