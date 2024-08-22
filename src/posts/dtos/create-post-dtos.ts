// For Documenation refer url: https://docs.nestjs.com/openapi/types-and-parameters
import {
    IsArray,
    IsEnum,
    IsISO8601,
    IsJSON,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    Matches,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enums';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';


export class CreatePostDto {
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title: string;

    @IsEnum(postType)
    @IsNotEmpty()
    postType: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
            'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
    })
    slug: string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status: postStatus;

    @IsOptional()
    @IsString()
    content: string;

    @IsOptional()
    @IsJSON()
    schema: string;

    @IsOptional()
    @IsUrl()
    featuredImageUrl: string;

    @IsISO8601()
    @IsOptional()
    publishOn: Date;

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions: [CreatePostMetaOptionsDto[]];
}