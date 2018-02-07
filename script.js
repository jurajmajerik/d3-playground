document.addEventListener("DOMContentLoaded", () => {

  d3.select("body")
  .append("h1")
  .text("Learning D3");

  d3.selectAll("li")
  .text("list item");

  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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
  const h = 100;

  d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0);

  d3.select("body").selectAll("svg")
  .data(dataset)
  .enter()
  .append("rect");



});
