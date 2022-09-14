import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }
    
    const pool = new pg.Pool({
      connectionString: "postgres://tfypwode:czGceYEtSKksC3LtjCYQ1B7TkF4J56O6@jelani.db.elephantsql.com/tfypwode"
   });
   global.connect = pool;
   return pool.connect();
}

export {
    connect 
}