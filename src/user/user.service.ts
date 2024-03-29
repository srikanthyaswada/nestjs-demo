import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './schema/user.schema';
import { userDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private userModel: Model<user>) {}


    async findAll(): Promise<user[]> {
        return this.userModel.find().exec();
      }
    
      async findOne(id: string): Promise<user> {
        return this.userModel.findById(id).exec();
      }
    
      async create(userDto: userDto): Promise<user> {
        const createdBook = new this.userModel(userDto);
        return createdBook.save();
      }
    
      async update(id: string, userDto: userDto): Promise<user> {
        return this.userModel.findByIdAndUpdate(id, userDto, { new: true }).exec();
      }
    
      async remove(id: string): Promise<void> {
        await this.userModel.findByIdAndDelete(id).exec();
      }
}
