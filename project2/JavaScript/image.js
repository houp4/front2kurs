function drawFigure(svg) {
    let figure = svg.append("g")
        .style("stroke", "darkblue")
        .style("stroke-width", 2)
        .style("fill", "none");

    figure.append("rect")
        .attr("x", -40)
        .attr("y", -40)
        .attr("width", 80)
        .attr("height", 80)
        .style("fill", "lightblue")
        .style("stroke", "darkblue")
        .style("stroke-width", 2);

    figure.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 25)
        .style("fill", "orange")
        .style("stroke", "darkred")
        .style("stroke-width", 2);

    figure.append("polygon")
        .attr("points", "-25,-15 -15,-25 -5,-15")
        .style("fill", "red")
        .style("stroke", "darkred")
        .style("stroke-width", 1.5);

    figure.append("polygon")
        .attr("points", "5,-15 15,-25 25,-15")
        .style("fill", "red")
        .style("stroke", "darkred")
        .style("stroke-width", 1.5);

    figure.append("polygon")
        .attr("points", "-25,15 -15,25 -5,15")
        .style("fill", "green")
        .style("stroke", "darkgreen")
        .style("stroke-width", 1.5);

    figure.append("polygon")
        .attr("points", "5,15 15,25 25,15")
        .style("fill", "green")
        .style("stroke", "darkgreen")
        .style("stroke-width", 1.5);

    figure.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 4)
        .style("fill", "yellow")
        .style("stroke", "black")
        .style("stroke-width", 1);
    
    return figure;
}