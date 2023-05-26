"use strict";

var server = require("server");

server.get("Show", function(req, res, next) {
    var myvariable = 4;
    res.render("vartest", { myProduct: { ID: "P0048M" } });
    return next();
});

// server.get("showpro", function(req, res, next) {
//     var CatalogMgr = require("dw/catalog/CatalogMgr");
//     var ProductMgr = require("dw/catalog/ProductMgr");
//     var viewData = res.getViewData();
//     var product = ProductMgr.getProduct(viewData.product.id.toString());
//     //var viewData=res.getViewData();
//     var example = "my product";
//     res.render("vartest", { myProduct: { ID: P0048M } });
//     return next();
// });

module.exports = server.exports();
