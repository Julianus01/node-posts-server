import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import PostController from './controllers/PostController'
import PingController from './controllers/PingController'
import { dbURL } from './db_config'
import UserController from './controllers/UserController';

class App {
  constructor() {
    this.app = express()
    this.initApp()
    this.connectDB()
    this.mountRoutes()
  }

  initApp() {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  async connectDB() {
    await mongoose.connect(dbURL, { useNewUrlParser: true, autoReconnect: true })
    console.log('Connected to server')
  }

  mountRoutes() {
    this.app.use('/', PingController)
    this.app.use('/posts', PostController)
    this.app.use('/user', UserController)
  }
}

export default new App().app