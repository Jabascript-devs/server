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

  findOne(id: number) {
    return this.authorRepository.findOneBy({ id });
  }

  update(id: number, updateAuthorDto: AuthorDto) {
    return this.authorRepository.update({ id }, updateAuthorDto);
  }

  remove(id: number) {
    return this.authorRepository.delete({ id });
  }
}
