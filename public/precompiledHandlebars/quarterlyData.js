(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['quarterlyData'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "          <div class= \"dataRowContainer "
    + ((stack1 = ((helper = (helper = helpers.AssetClasses || (depth0 != null ? depth0.AssetClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AssetClasses","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.AdditionalAttributes || (depth0 != null ? depth0.AdditionalAttributes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AdditionalAttributes","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" id =\""
    + alias4(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\" portfolioData\">  \r\n                <div class=\"cell portfolioName\" >\r\n                    <a href="
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.Documents : depth0)) != null ? stack1.Prospectus : stack1)) != null ? stack1.Url : stack1), depth0))
    + " target=\"blank\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.Documents : depth0)) != null ? stack1["portfolio-name"] : stack1), depth0))
    + "</a>\r\n                </div>\r\n                <div class=\"cell ticker\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1.identifier : stack1), depth0))
    + "</div>\r\n                <div class=\"cell inceptionDate\">\r\n                    "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["inception-date"] : stack1), depth0))
    + "\r\n                </div>\r\n                <div class=\"cell navi\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["nav-price"] : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell ytd\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1.ytd : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell oneYear\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["one-year"] : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell threeYear\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["three-year"] : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell fiveYear\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["five-year"] : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell tenYear\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["ten-year"] : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell sinceInception\">\r\n                      "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1["since-inception"] : stack1), depth0))
    + "\r\n                  </div>\r\n                  <div class=\"cell gross\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1.TOER : stack1), depth0))
    + "</div>\r\n                  <div class=\"cell net\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.PortfolioData : depth0)) != null ? stack1.NER : stack1), depth0))
    + "</div>\r\n            </div>\r\n            <div class=\" benchmarkData\">  \r\n                <div class=\"cell portfolioName\" >\r\n                    "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["portfolio-name"] : stack1), depth0))
    + "\r\n                </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.identifier : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["inception-date"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["nav-price"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.ytd : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["one-year"] : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["three-year"] : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["five-year"] : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["ten-year"] : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["since-inception"] : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data})) != null ? stack1 : "")
    + "                  \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.TOER : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.program(41, data, 0),"data":data})) != null ? stack1 : "")
    + "                  \r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.NER : stack1),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\r\n          </div>    \r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell ticker\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.identifier : stack1), depth0))
    + "</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell ticker\">—</div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell inceptionDate\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["inception-date"] : stack1), depth0))
    + "</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell inceptionDate\">—</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell navi\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["nav-price"] : stack1), depth0))
    + "</div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell navi\">—</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell ytd\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.ytd : stack1), depth0))
    + "</div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell ytd\">—</div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell oneYear\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["one-year"] : stack1), depth0))
    + "</div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell oneYear\">--</div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell threeYear\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["three-year"] : stack1), depth0))
    + "</div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell threeYear\">—</div>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell fiveYear\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["five-year"] : stack1), depth0))
    + "</div>\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell fiveYear\">—</div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell tenYear\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["ten-year"] : stack1), depth0))
    + "</div>\r\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell tenYear\">—</div>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell sinceInception\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1["since-inception"] : stack1), depth0))
    + "</div>\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell sinceInception\">—</div>\r\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell gross\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.TOER : stack1), depth0))
    + "</div>\r\n";
},"41":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell gross\">—</div>\r\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"cell net\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.BenchmarkData : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.NER : stack1), depth0))
    + "</div>\r\n";
},"45":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"cell net\">—</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"data-container\"></div>\r\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Quarterly : depth0)) != null ? stack1.Funds : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>";
},"useData":true});
})();