import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor() {}

  async getBooks(): Promise<any[]> {
    return [];
  }
}
