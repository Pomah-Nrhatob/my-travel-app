const db = require('../db')

class ChaptersController {
  async createChapter(req, res) {
    const { title, content, travel_id } = req.body
    const newChapter = await db.query(
      `INSERT INTO chapters (title, content, travel_id) values ($1, $2, $3) RETURNING *`,
      [title, content, travel_id]
    )
    res.json(newChapter.rows[0])
  }
  async getChapters(req, res) {
    const chapters = await db.query(`SELECT * FROM chapters`)
    res.json(chapters.rows)
  }
  async getChaptersOneTravel(req, res) {
    const id = req.params.id
    const chapters = await db.query(
      `SELECT * from chapters WHERE travel_id = $1`,
      [id]
    )
    res.json(chapters.rows)
  }
  async updateChapter(req, res) {
    const { id, title, content } = req.body
    const chapter = await db.query(
      `UPDATE chapters set title = $1, content = $2 where id = $3 RETURNING *`,
      [title, content, id]
    )
    res.json(chapter.rows[0])
  }
  async deleteChapter(req, res) {
    const id = req.params.id
    const chapter = await db.query(`DELETE from chapters WHERE id = $1`, [id])
    res.json(chapter.rows[0])
  }
}

module.exports = new ChaptersController()
