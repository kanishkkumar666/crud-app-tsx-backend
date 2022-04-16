import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    index(): Promise<import("./schema/user.schema").User[]>;
    find(id: string): Promise<import("./schema/user.schema").User>;
    create(createUserDto: CreateUserDto): Promise<import("./schema/user.schema").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schema/user.schema").User>;
    delete(id: string): Promise<import("./schema/user.schema").User>;
}
