import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;

  @ApiModelProperty()
  @IsInt()
  readonly age: number;

  @ApiModelProperty({ type: String})
  @IsString()
  readonly breed: string;
}
