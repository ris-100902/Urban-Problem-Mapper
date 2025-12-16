import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Issue } from "./entities/issue.entity";
import { Repository } from "typeorm";
import { CreateIssueDto } from "./dto/create-issue.dto";

@Injectable()
export class IssueService{
    constructor(@InjectRepository(Issue) private issueRepository: Repository<Issue>){}

    async findAll(): Promise<Issue[]>{
        return this.issueRepository.find();
    }

    async createOne(createIssueDto: CreateIssueDto): Promise<Issue>{
        const newIssue = this.issueRepository.create(createIssueDto);
        await this.issueRepository.save(newIssue);
        return newIssue;
    }
}