import * as functions from 'firebase-functions'
import * as express from 'express'
import {addUser , getAllUsers} from './core/usersController'
import {all} from './core/versionController'

const app = express()

app.get('/', all)

// USERS
app.get('/users', getAllUsers)
app.post('/users', addUser)


exports.app = functions.https.onRequest(app)