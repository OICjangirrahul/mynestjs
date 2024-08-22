import { Controller, Get, Post, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { query } from 'express';

@Controller('users')
export class UsersController {
    @Get('/:id?')
    getUsers(
        @Param('id',ParseIntPipe) id: number | undefined, 
        @Query('limit',new DefaultValuePipe(100), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(101),ParseIntPipe) page: number,
    )
    {
        console.log(limit);
        console.log(page);
        
        return id
    }


    @Post()
    createUsers(@Body() body: any, @Headers() headers: any, @Ip() ip: any): string {
        return ip
    }

    // @Post()
    // createUsers(@Req() req: Request) {
    //     console.log(req)
    //     return "req"
    // }
    

}
