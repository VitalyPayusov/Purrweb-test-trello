import { PartialType } from "@nestjs/swagger";
import { CommentDto } from "./comments.dto";

export class UpdateCommentDto extends PartialType(CommentDto) {}