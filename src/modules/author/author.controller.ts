import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto } from './dto/author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: AuthorDto) {
    await this.authorService.create(createAuthorDto);
    return { result: 'OK' };
  }

  @Get()
  async findAll() {
    return await this.authorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.authorService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAuthorDto: AuthorDto) {
    await this.authorService.update(+id, updateAuthorDto);
    return { result: 'OK' };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.authorService.remove(+id);
    return { result: 'OK' };
  }
}
