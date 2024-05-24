width = 2000;
height = 2000;

let svg = d3.select("svg").attr("width", width).attr("height", height);

function CLOWN(){
    let clown = svg.append("g")
         .style("stroke", "brown")
         .style("stroke-width", 2)
         .style("fill", "brown");

    clown.append("circle")
        .attr("cx", 50)
        .attr("cy", 0)
        .attr("r", 25)
        .style("fill", "red")
        .style("stroke", "red");

    clown.append("circle")
        .attr("cx", -50)
        .attr("cy", 0)
        .attr("r", 25)
        .style("fill", "red")
        .style("stroke", "red");

    clown.append("circle")
        .attr("cx", 0)
        .attr("cy", 15)
        .attr("r", 50)
        .style("fill", "white")
        .style("stroke", "black");

    clown.append("circle")
        .attr("cx", 0)
        .attr("cy", 15)
        .attr("r", 10)
        .style("fill", "red")
        .style("stroke", "red");

    clown.append("circle")
        .attr("cx", 20)
        .attr("cy", 0)
        .attr("r", 10)
        .style("fill", "white")
        .style("stroke", "blue")
        .style("stroke-width", 5);

    clown.append("circle")
        .attr("cx", -20)
        .attr("cy", 0)
        .attr("r", 10)
        .style("fill", "white")
        .style("stroke", "blue")
        .style("stroke-width", 5);

    let arc = d3.arc()
        .innerRadius(35)
        .outerRadius(35);
       
    clown.append("path")
        .attr("d", arc({startAngle: Math.PI /3 * 2,
        endAngle: Math.PI/3 * 4}))
        .style("stroke", "brown")
       
    return clown
}

let startAnimation = document.getElementById('startButton');

startAnimation.addEventListener("click", Animation)


function Animation(){

    let cx = +document.getElementById("cx").value;
    let cy = +document.getElementById("cy").value;
    
    let pict = CLOWN()

    pict.attr("transform", 'translate('+ cx +','+ cy +')');

    let speed = document.getElementById("speed").value;
    let scale = document.getElementById("scale").value;
    let rotation = document.getElementById("rotation").value;


    pict.transition()
     .duration(speed)
     .attr("transform", "translate(+" + cx + "," + cy + ") scale(" + scale + ") rotate(" + rotation + ")")
     .transition()
     .duration(speed)
     .attr("transform", "translate(" + cx + ","+ (cy+400) +") scale(" + scale + ") rotate(" + rotation + ")")
     .transition()
     .duration(speed)
     .attr("transform", "translate(" + (cx+200) + ","+ (cy+400) +") scale(" + scale + ") rotate(" + rotation + ")")
     .transition()
     .duration(speed)
     .attr("transform", "translate(" + (cx+200) + "," + cy + ") scale(" + scale + ") rotate(" + rotation + ")")
     .transition()
     .duration(speed)
     .attr("transform", "translate(" + (cx+400) + "," + cy + ") scale(" + scale + ") rotate(" + rotation + ")")
     .transition()
     .duration(speed)
     .attr("transform", "translate(" + (cx+400) + "," + (cy+400) + ") scale(" + scale + ") rotate(" + rotation + ")")
}

function clearSVG() {

    svg.selectAll("circle").remove()
    svg.selectAll("path").remove()

    document.getElementById("speed").value = '500';
    document.getElementById("scale").value = '1';
    document.getElementById("rotation").value = '0';
}

let clearAnimation = document.getElementById('clearButton');
clearAnimation.addEventListener("click", clearSVG);

