import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
    constructor(private readonly userService: UsersService){}
    findApp(userId: string){
        const user = this.userService.findOneById(userId);
        return [
            {
                user: user,
                title: "test title",
                content: "test content"
            },
            {
                user: user,
                title: "test title2",
                content: "test content2"
            }
        ];
    }
}
