import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsNotEmpty, IsOptional } from "class-validator";

export class ColumnDto{
    @ApiProperty({example: 'Name column', description: 'name'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    readonly name: string;

    @ApiProperty(
        {example: 'Description column',
        description: 'description'}
     )
    @IsString()
    @IsOptional()
    @MaxLength(100)
    readonly description?: string;
}
