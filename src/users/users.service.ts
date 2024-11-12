import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

	constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

	private readonly users = [
		{
				id: 1,
				username: 'john',
				password: 'changeme',
		},
		{
				id: 2,
				username: 'maria',
				password: 'guess',
		},
	];

	async findOneStaticUsers(username: string): Promise<User | undefined> {
		return this.users.find(user => user.username === username);
	}

	async findOne(username: string): Promise<User | undefined> { 
    const user = await this.usersRepository.findOne({ where: { username } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

}
