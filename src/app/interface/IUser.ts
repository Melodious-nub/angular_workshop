export interface IUser {
    email: string;
    password: string;
    res: {
        success: boolean,
        statusCode: Number,
        message: string,
        data: null
      }
  }