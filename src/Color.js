import * as d3 from "d3";

const url = "https://gist.githubusercontent.com/bagaski/f9cc9c62b3255b06ed3ebb0f083d8cfd/raw/e056507b900af5d48899b666c1f29a07e1503ba3/cssColorNames.csv"

const database = d3.csv(url)
.then(data => { console.log(data)

d3.select('div')
  .style("display", "grid")
  .style("grid-template-columns", "auto auto auto auto")
  .style("gap", "1px")
  .selectAll('p')
  .data(data)
  .enter()
  .append('p')
  .text(data => data.Keyword)
  .style("background-color", data=> data.Keyword)
  .style("padding", "1rem")
  .style("margin", "0")
  
  });

const Color = () => {
 return (
  <div>

  </div>
 );
}

export default Color;