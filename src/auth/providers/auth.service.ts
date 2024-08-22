import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UsersService))
        private readonly userService: UsersService){}
    login(email: string, password: string, id: string){
        const user = this.userService.findOneById('123')
        return "SAMPLE TOKEN";
    }

    isAuth(){
        return true;
    }
}
