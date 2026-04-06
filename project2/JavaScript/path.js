function createPathInvertedM() {
    const svg = d3.select("svg");
    const width = parseInt(svg.attr("width"));
    const height = parseInt(svg.attr("height"));
    
    let data = [];
    const padding = 80;
    const step = 5;

    let x = padding;
    let y = padding;
    while (y < height - padding) {
        data.push({x: x, y: y});
        y += step;
    }

    while (x < width / 2 && y > padding) {
        data.push({x: x, y: y});
        x += step;
        y -= step;
    }
    
    while (y < height - padding) {
        data.push({x: x, y: y});
        x += step;
        y += step;
    }

    while (y > padding) {
        data.push({x: x, y: y});
        y -= step;
    }
    
    return data;
}

const drawPath = () => {
    const dataPoints = createPathInvertedM();
    
    const line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y);
    
    const svg = d3.select("svg");
    const path = svg.append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', 'none')
        .attr('fill', 'none');
    
    return path;
}

function translateAlong(path) {
    const length = path.getTotalLength();
    return function() {
        return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
            return `translate(${x},${y})`;
        }
    }
}