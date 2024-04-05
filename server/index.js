const express = require('express')
const cors = require('cors')
const travelRouter = require('./routes/travels.routes')
const chapterRouter = require('./routes/chapters.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', travelRouter)
app.use('/api', chapterRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
