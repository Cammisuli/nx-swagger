import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@ApiBearerAuth()
@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ title: 'Create cat' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created',
  })
  @ApiResponse({ status: 403, description: 'Forbidden'})
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
// tslint:disable-next-line: no-console
    console.log('Trying to find a cat');
    const catFound: Cat  = this.catsService.findOne(+id);
// tslint:disable-next-line: no-console
    console.log(`Cat found: ${catFound}`);
    return catFound;
  }
}
