const is_render = process.env.IS_RENDER || false; 

const dbConfigRender = "mysql://freedb_2350_main:SA33#V&vwb&!GUm@sql.freedb.tech/freedb_comp2350-week2-A01274308";
const dbConfigLocal = "mysql://root:El11fordawin@localhost/lab_example";

if (is_render) {
    var databaseConnectionString = dbConfigRender;
}
else {
    var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;