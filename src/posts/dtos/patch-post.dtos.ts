import { ApiProperty, PartialType } from "@nestjs/swagger"
import { CreatePostDto } from "./create-post-dtos";
import { IsInt, IsNotEmpty } from "class-validator";

export class patchPostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: "the id of post that needs to update"
    })

    @IsInt()
    @IsNotEmpty()
    id: number;

}