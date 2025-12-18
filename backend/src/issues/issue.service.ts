import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Issue } from "./entities/issue.entity";
import { Repository } from "typeorm";
import { CreateIssueDto } from "./dto/create-issue.dto";
import { UpdateIssueDto } from "./dto/update-issue.dto";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class IssueService{
    constructor(@InjectRepository(Issue) private issueRepository: Repository<Issue>){}

    async findAll(): Promise<Issue[]>{
        return this.issueRepository.find();
    }

    async findOne(id: number): Promise<Issue|null>{
        return await this.issueRepository.findOneBy({id});
    }

    async deleteOne(id: number): Promise<Issue|null>{
        const issue = await this.issueRepository.findOneBy({id});
        if (!issue){
            throw new NotFoundException("No such issue exists");
        }
        await this.issueRepository.delete(issue);
        return issue;
    }

    async createOne(createIssueDto: CreateIssueDto, user: User): Promise<Issue>{
        const newIssue = this.issueRepository.create({...createIssueDto, createdBy: user});
        await this.issueRepository.save(newIssue);
        return newIssue;
    }

    async updateOne(id: number, updateIssueDto: UpdateIssueDto): Promise<Issue|null>{
        const issue = await this.issueRepository.findOneBy({id});
        if (!issue){
            throw new NotFoundException("No such issue");
        }
        Object.assign(issue, updateIssueDto);
        return await this.issueRepository.save(issue);
    }
}