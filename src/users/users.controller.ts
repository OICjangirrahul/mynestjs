import { Controller, Get, Post, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users-dto';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    // @Get('/:id?')
    // getUsers(
    //     @Param('id',ParseIntPipe) id: number | undefined, 
    //     @Query('limit',new DefaultValuePipe(100), ParseIntPipe) limit: number,
    //     @Query('page',new DefaultValuePipe(101),ParseIntPipe) page: number,
    // )
    // {
    //     console.log(limit);
    //     console.log(page);
        
    //     return id
    // }

    @Get('/:id?')
    getUsers(
        @Param('id') getUsersParamDto: GetUsersParamDto, 
        @Query('limit',new DefaultValuePipe(100), ParseIntPipe) limit: number,
        @Query('page',new DefaultValuePipe(101),ParseIntPipe) page: number,
    )
    {
        return this.usersService.findAll(getUsersParamDto,limit,page)
    }

    // @Post()
    // createUsers(@Body() body: any, @Headers() headers: any, @Ip() ip: any): string {
    //     return ip
    // }

    // @Post()
    // createUsers(@Req() req: Request) {
    //     console.log(req)
    //     return "req"
    // }

    @Post()
    createUsers(@Body() createUserDto: CreateUserDto) {
        return createUserDto
    }


    @Patch()
    patchUsers(@Body() patchUserDto: PatchUserDto) {
        return patchUserDto
    }

    

}
