document.addEventListener("DOMContentLoaded", () => {

  d3.select("body")
  .append("h1")
  .text("Learning D3");

  d3.selectAll("li")
  .text("list item");

  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 5];

  d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("li")
  .text((d) => `${d} USD`)
  .style("font-family", "verdana")
  .style("color", (d) => {
    return (d < 20) ? "red" : "green";
  });

  d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => {
    return d*5 + "px";
  });

  const w = 500;
  const h = 500;

  const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return (i * 30);
  })
  .attr("y", (d, i) => {
    return h - d * 3;
  })
  .attr("width", 25)
  .attr("height", (d, i) => {
    return (d * 3);
  })
  .attr("fill", "white")
  .attr("class", "bar");

  svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => (h - d * 3) - 3)
  .text((d) => d)
  .style("font-size", "25px")
  .style("fill", "white");

  const dataset2 = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

  const svg2 = d3.select("body")
  .append("svg")
  .attr("height", h)
  .attr("width", w);

  svg2.selectAll("circle")
  .data(dataset2)
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("cx", (d) => d[0])
  .attr("cy", (d) => h - d[1]);

  svg2.selectAll("text")
  .data(dataset2)
  .enter()
  .append("text")
  .text((d) => `${d[0]}, ${d[1]}`)
  .attr("x", (d) => d[0] + 5)
  .attr("y", (d) => h - d[1]);



});
