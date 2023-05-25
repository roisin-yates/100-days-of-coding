import express from 'express'
import { join } from 'node:path'

import styleRoutes from './routes/styles'
import subjectRoutes from './routes/subjects'
import wildcardRoutes from './routes/wildcards'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/styles', styleRoutes)
server.use('/api/v1/subjects', subjectRoutes)
server.use('/api/v1/wildcards', wildcardRoutes)

export default server
