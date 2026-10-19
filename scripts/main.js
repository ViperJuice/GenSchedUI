
// contents of main.js:
require.config({
    paths: {
        "chartsmodule": "helper/chartsmodule",
        "Chart": "helper/Chart.bundle",
    }
});
requirejs(['chartsmodule'], function (chartsmodule) {
    chartsmodule.addChart(-1);
});