import { ApiProperty } from "@nestjs/swagger";
import { IsString, Max, Min } from "class-validator";

export class CardDto {
    
    @ApiProperty({example: 'Card', description: 'Card name'})
    @IsString()
    @Min(1)
    @Max(30)
    name: string;
    
    @ApiProperty({example: 'Card description', description: 'Card description'})
    @IsString()
    @Max(300)
    description: string;

    @ApiProperty({example: 'Result', description: 'Card result'})
    @IsString()
    @Max(30)
    result: string;
}