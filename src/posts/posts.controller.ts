import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post-dtos';

@Controller('posts')
@ApiTags('Post')
export class PostsController {
    constructor(private readonly postService: PostsService){}
    
    @Get('/:userId')
    getPost(@Param('userId') userId: string){
        return this.postService.findApp(userId)
    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto){

    }
}
