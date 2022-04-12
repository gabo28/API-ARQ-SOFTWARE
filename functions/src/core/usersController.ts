import { db } from '../config/firebase'

const addUser = async (req: any, res: any) => {
    try {
      const users = db.collection('users').doc()
      const userObject = {
        id: users.id,
       ...req.body
      }
      await users.set(userObject)
      res.status(200).send({
        status: 'success',
        message: 'Usuario agregado',
        data: userObject
      })
    } catch(error: any) {
        res.status(500).json(error.message)
    }
  }

  const getAllUsers = async (req: any, res: any) => {
    try {
      const allUsers: any[] = [];
      const querySnapshot = await db.collection('users').get()
      querySnapshot.forEach((doc: any) => allUsers.push(doc.data()))
      return res.status(200).json(allUsers)
    } catch(error: any) { return res.status(500).json(error.message) }
  }

  export { addUser, getAllUsers }