(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['preHeadingTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\" preHeadings\">\r\n    <div class=\"cell benchmark\">\r\n        <input type=\"button\" class=\"benchmarkButton\" value=\"View Benchmark\"> \r\n    </div>\r\n    <div class=\"cell empty\">\r\n    </div>\r\n    <div class=\"cell empty\">\r\n    </div>\r\n    <div class=\"cell dateHeader\">\r\n        <label>AS OF</label> <br>\r\n        <span>"
    + alias4(((helper = (helper = helpers.AsOfDate || (depth0 != null ? depth0.AsOfDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AsOfDate","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"monthlyQuarterly\">\r\n        <div class=\"buttonGroup\">\r\n            <input type=\"button\" class=\"cell monthly\" value=\"Monthly\">\r\n            <input type=\"button\" class=\"cell quarterly\" value=\"Quarterly\">\r\n        </div> \r\n        <div class=\"tabDescription\" >\r\n            ANNUALIZED NET RETURNS AS OF \r\n            <span>"
    + alias4(((helper = (helper = helpers.AsOfDateMonthly || (depth0 != null ? depth0.AsOfDateMonthly : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AsOfDateMonthly","hash":{},"data":data}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"cell expenseRatio\">\r\n        <label>EXPENSE RATIO</label>\r\n        <sup>1</sup>\r\n    </div>\r\n</div>";
},"useData":true});
})();