/**
 * Created by Bharath on 29/03/16.
 */

var chardata=[5,7,5];
var design=['photoshop',"Axure","fireworks"];

var barHeight=20;
var barOffset=20;
//var yScale=d3.scale.linear()
//    .domain([0,d3.max(chardata)])
//    .range([0,height]);
//var xScale=d3.scale.ordinal().domain(d3.range(0,chardata.length)).rangeBands([0,width]);

var height=170;
var width=1000;
var xScale = d3.scale.linear()
    .domain([0,10])
    .range([0,width-120]);
var yScale=d3.scale.linear()
    .domain([0,design.length]).range([0,120]);
var colorScale=d3.scale.linear().domain([0,chardata.length]).range(['#ff0000', '#ffcccc']);
var xAxis=d3.svg.axis().scale(xScale).orient('bottom');
var yAxis=d3.svg.axis().scale(yScale).tickFormat(function(d,i){
    return design[i];
}).tickValues(d3.range(3)).orient('left');
var gr=d3.select('.hb')
    .append('svg')
    .attr('width',width)
    .attr('height',height)
    .style('background',"#ffffff")
    .append('g')
    .attr("transform","translate(100,25)");




var bars= gr.selectAll('rect')
    .data(chardata)
    .enter()
    .append('rect')
    .style({
        'fill':function(data,i){
            return colorScale(i);
        },
        'stroke':'#d6e9c6',
        'stroke-width':'5'
    })
    .attr('width',function(d){
        return 0;
    })
    .attr('height',barHeight)
    .attr('x',0)
    .attr('y',function(d,i){
        return i*40;
    });

gr.append('g').attr("transform","translate(0,120)").call(xAxis);
gr.append('g').attr("transform","translate(2,0)").call(yAxis);


gr.selectAll('rect').data(chardata).transition().duration(1000).attr('width',function(d){
    return xScale(d);
});
//
//var xAxis=d3.svg.axis().scale(xScale).orient('bottom').tickValues([1,2,3,4,5,6,7,8,9]);
//
//d3.select('svg').append('g').attr('transform',"translate(0,150)").call(xAxis);







