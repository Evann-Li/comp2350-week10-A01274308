const is_render = process.env.IS_RENDER || false; 

const dbConfigRender = {
    dialect: 'mysql',
    host: 'sql.freedb.tech',
    port: 3306,
    username: 'freedb_2350_main',
    password: 'SA33#V&vwb&!GUm',
    database: 'freedb_comp2350-week2-A01274308',
};

const dbConfigLocal = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'El11fordawin',
    database: 'lab_example',
};

let databaseConnectionString;
if (is_render) {
    databaseConnectionString = process.env.RENDER_DB_CONNECTION_STRING; // Assuming Render provides a DB connection string as an environment variable
} else {
    databaseConnectionString = 'mysql://root:El11fordawin@localhost/lab_example';
}

module.exports = {
    dbConfigRender,
    dbConfigLocal,
    databaseConnectionString,
};
