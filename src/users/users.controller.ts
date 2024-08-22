import { Controller, Get, Post, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users-dto';
import { UsersService } from './users.service'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
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
    @ApiOperation({
        summary: "fatch a list of registered users of the app"
    })
    @ApiResponse({
        status:200,
        description: "user fatch successfully"
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'the number of enties returned per query',
        example: 10,
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'the postion of the page number that you want the api to retun',
        example: 1,
    })
    getUsers(
        @Param() getUsersParamDto: GetUsersParamDto, 
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
