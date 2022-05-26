import { ApiProperty } from "@nestjs/swagger";
import {IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength} from "class-validator";

export class CardDto {
    @ApiProperty({ example: 4, description: 'Parent column ID' })
    @IsNumber()
    @IsDefined()
    readonly columnId: number;

    @ApiProperty({example: 'Name card', description: 'name'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    readonly name: string;

    @ApiProperty(
        {example: 'Description card',
        description: 'description'}
     )
    @IsString()
    @IsOptional()
    @MaxLength(100)
    readonly description?: string;
}
