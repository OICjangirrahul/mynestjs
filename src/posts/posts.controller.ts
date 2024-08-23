import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post-dtos';
import { patchPostDto } from './dtos/patch-post.dtos';

@Controller('posts')
@ApiTags('Post')
export class PostsController {
    constructor(private readonly postService: PostsService){}
    
    @Get('/:userId')
    getPost(@Param('userId') userId: string){
        return this.postService.findApp(userId)
    }

    @ApiResponse({
        status: 201,
        description: "you get 201 response"
    })
    @ApiOperation({
        summary: "create a new post"
    })

    @Post()
    createPost(@Body() createPostDto: CreatePostDto){
        console.log(createPostDto);
        
    }


    @ApiResponse({
        status: 201,
        description: "you get 200 response"
    })
    @ApiOperation({
        summary: "update a new post"
    })

    @Patch()
    updatePost(@Body() patchPostDto:patchPostDto){
        console.log(patchPostDto);
    }
}
