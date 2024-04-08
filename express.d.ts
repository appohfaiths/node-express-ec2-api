declare global {
  namespace Express {
    interface Request {
      user: any; // or the type of your 'user'
    }
  }
}

export {}