/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { AuthorDto } from './dto/author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../../entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  create(createAuthorDto: AuthorDto) {
    return this.authorRepository.insert(createAuthorDto);
  }

  findAll() {
    return this.authorRepository.find();
  }

  async findOne(id: number) {
    const queryBuilder = this.authorRepository.createQueryBuilder('author');

    const authorData = await queryBuilder
      .select(['id', 'full_name as fullName'])
      .where('id = :id', { id })
      .getRawOne();

    const author = this.authorRepository.create();
    author.id = authorData.id;
    author.fullName = authorData.fullName;

    return author;
  }

  update(id: number, updateAuthorDto: AuthorDto) {
    return this.authorRepository.update({ id }, updateAuthorDto);
  }

  remove(id: number) {
    return this.authorRepository.delete({ id });
  }
}
