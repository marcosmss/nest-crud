import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  age: number;
}
