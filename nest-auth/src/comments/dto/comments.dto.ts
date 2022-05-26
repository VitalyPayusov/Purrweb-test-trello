import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CommentDto {
    @ApiProperty({ example: 4, description: 'Parent column ID' })
    @IsNumber()
    @IsDefined()
    readonly cardId: number;

    @ApiProperty(
        {example: 'Text',
        description: 'text'}
     )
    @IsString()
    @IsOptional()
    @MaxLength(100)
    readonly text: string;
}