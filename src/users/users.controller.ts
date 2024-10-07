import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import type { CreateUserDto } from "./dto/create-user.dto";
import { Roles } from "src/roles/roles.decorator";
import { RolesEnum } from "src/enums/roles.enum";
import { UpdateUserDto } from "./dto/update-user.dto";

@Roles(RolesEnum.Admin)
@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	findAll() {
		return this.usersService.findAll();
	}

	@Post()
	createEncargado(@Body() body: CreateUserDto) {
		return this.usersService.createUser(body);
	}

	@Patch(":id")
	updateUser(@Body() body: UpdateUserDto, @Param("id") id: string) {
		return this.usersService.update(id, body);
	}

	@Delete(":id")
	deleteUser(@Param("id") id: string) {
		return this.usersService.delete(id);
	}
}
