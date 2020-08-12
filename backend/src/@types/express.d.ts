declare namespace Express {
  export interface Request {
    userId: {
      id: number;
    };

    t: (text: string) => string;
  }
}
