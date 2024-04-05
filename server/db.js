const Pool = require('pg').Pool

const pool = new Pool({
  user: 'xgb_travelapp',
  host: 'postgres81.1gb.ru',
  database: 'xgb_travelapp',
  password: 'JAJ3XEAT-hNX',
  port: 5432,
})

module.exports = pool
