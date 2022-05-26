import { PartialType } from "@nestjs/swagger";
import { CardDto } from "./cards.dto";

export class UpdateCardDto extends PartialType(CardDto) {}