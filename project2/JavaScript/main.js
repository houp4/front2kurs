document.addEventListener("DOMContentLoaded", function() {
    const width = 800;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
       .attr("height", height);
    
    const duration = document.getElementById('duration');
    const scaleStart = document.getElementById('scaleStart');
    const scaleEnd = document.getElementById('scaleEnd');
    const rotateStart = document.getElementById('rotateStart');
    const rotateEnd = document.getElementById('rotateEnd');
    const animateBtn = document.getElementById('animateBtn');
    const clearBtn = document.getElementById('clearBtn');
    
    animateBtn.addEventListener('click', function() {
        runAnimation();
    });
    
    clearBtn.addEventListener('click', function() {
        svg.selectAll('*').remove();
    });
})

const runAnimation = () => {
    const svg = d3.select("svg");
    svg.selectAll('*').remove();

    const duration = parseInt(document.getElementById('duration').value);
    const scaleStartVal = parseFloat(document.getElementById('scaleStart').value);
    const scaleEndVal = parseFloat(document.getElementById('scaleEnd').value);
    const rotateStartVal = parseInt(document.getElementById('rotateStart').value);
    const rotateEndVal = parseInt(document.getElementById('rotateEnd').value);

    let figure = drawFigure(svg);
    const path = drawPath();

    figure.transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .attrTween('transform', function() {
            const length = path.node().getTotalLength();
            return function(t) {
                const point = path.node().getPointAtLength(t * length);

                let scale = scaleStartVal + (scaleEndVal - scaleStartVal) * t;
                let rotate = rotateStartVal + (rotateEndVal - rotateStartVal) * t;

                return `translate(${point.x}, ${point.y}) scale(${scale}) rotate(${rotate})`;
            };
        });
};