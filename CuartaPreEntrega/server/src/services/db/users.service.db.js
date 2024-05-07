import { userModel } from '../../models/user.model.js'
import mongoose from 'mongoose'
import { createHash, isValidPassword } from '../../utils.js'
import bcrypt from 'bcrypt'

export default class UsersManager {
  constructor(repo) {
    this.repo = repo
    this.addUser = this.addUser.bind(this)
  }
  async addUser(user) {
    try {
      const repoResponse = await this.repo.add(user)

      return {
        success: repoResponse.success,
        message: repoResponse.message,
        user: repoResponse.newUser,
      }
    } catch (error) {
      if (
        error.code === 11000 &&
        error.keyPattern &&
        error.keyPattern.email === 1
      ) {
        return {
          success: false,
          message: 'Credentials already in use',
          user: false,
        }
      } else if (error instanceof mongoose.Error.ValidationError) {
        return { success: false, message: error, user: false }
      } else {
        console.error(error)
        return { success: false, message: error, user: false }
      }
    }
  }

  async loginUser({ email, password }) {
    try {
      const repoResponse = await this.repo.login({ email, password })
      return {
        success: repoResponse.success,
        message: repoResponse.success,
        foundUser: repoResponse.user,
      }
    } catch (error) {
      return { success: false, message: error, user: false }
    }
  }

  async getByEmail(email) {
    try {
      const user = await this.repo.getByEmail(email)
      return user
        ? { success: true, user }
        : { success: false, message: 'User not found' }
    } catch (error) {
      return { success: false, message: error, user: false }
    }
  }

  async getUserById(id) {
    try {
      const user = await this.repo.getById(id)
      return user
        ? { success: true, user }
        : { success: false, message: 'User not found' }
    } catch (error) {
      return { success: false, message: error, user: false }
    }
  }

  async updatePassword(id, newPassword) {
    try {
      console.log(id, newPassword)
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      const user = await this.repo.updatePassword(id, hashedPassword)
      console.log(user)
      delete user.password
      return user
        ? { success: true, message: 'Password updated', user }
        : { success: false, message: 'Could not update password' }
    } catch (error) {
      return { success: false, message: error, user: false }
    }
  }

  async changeRole(uId, newRole) {
    try {
      const user = await this.repo.changeRole(uId, newRole)
      return user
        ? { success: true, message: 'Role updated', user }
        : { success: false, message: 'Could not update role' }
    } catch (error) {
      return { success: false, message: error, user: false }
    }
  }

  async lastConnection(uId) {
    try {
      const user = await this.repo.lastConnection(uId)
      return user
        ? { success: true, message: 'Last connection updated', user }
        : { success: false, message: 'Could not update last connection' }
    } catch (error) {
      return { success: false, message: error, user: false }
    }
  }
}
