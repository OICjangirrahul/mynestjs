import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService) {}

    findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number) {
        const isAuth = this.authService.isAuth();
        console.log(isAuth)
        return [
            {
                "firstName": "Jonh",
                "lastName": "Doe",
            },
            {
                "firstName": "rahul",
                "lastName": "jangir",
            }
        ]
    }

    findOneById(id: string) {
        return [
            {
                "id": 1,
                "firstName": "Jonh",
                "lastName": "Doe",
            },
        ]
    }
}
