import { ApiProperty } from "@nestjs/swagger";
import { IsString, Max, Min } from "class-validator";

export class ColumnDto{
    @ApiProperty({example: 'Column', description: 'Column name'})
    @IsString()
    @Min(1)
    @Max(30)
    name: string;

    @ApiProperty({example: 'Column description', description: 'Column description'})
    @IsString()
    @Max(300)
    description: string;
}