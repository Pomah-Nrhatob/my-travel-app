const db = require('../db')

class TravelsController {
  async createTravel(req, res) {
    const { title, countries, id_for_slug } = req.body
    const newTravel = await db.query(
      `INSERT INTO travels (title, countries, id_for_slug) values ($1, $2, $3) RETURNING *`,
      [title, countries, id_for_slug]
    )
    res.json(newTravel.rows[0])
  }
  async getTravels(req, res) {
    const travels = await db.query(`SELECT * FROM travels`)
    res.json(travels.rows)
  }
  async getOneTravel(req, res) {
    const id = req.params.id
    const travel = await db.query(`SELECT * from travels WHERE id = $1`, [id])
    res.json(travel.rows[0])
  }
  async updateTravel(req, res) {
    const { id, title, countries } = req.body
    const travel = await db.query(
      `UPDATE travels set title = $1, countries = $2 where id = $3 RETURNING *`,
      [title, countries, id]
    )
    res.json(travel.rows[0])
  }
  async deleteTravel(req, res) {
    const id = req.params.id
    const travel = await db.query(`DELETE from travels WHERE id = $1`, [id])
    res.json(travel.rows[0])
  }
}

module.exports = new TravelsController()
