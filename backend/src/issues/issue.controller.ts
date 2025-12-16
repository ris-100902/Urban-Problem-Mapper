import { Body, Controller, Get, Post } from "@nestjs/common";
import { IssueService } from "./issue.service";
import { CreateIssueDto } from "./dto/create-issue.dto";

@Controller('issues')
export class IssueController{
    constructor(private issueService: IssueService) {}

    @Get()
    findAll(){
        return this.issueService.findAll();
    }

    @Post()
    createOne(@Body() createIssueDto: CreateIssueDto){
        return this.issueService.createOne(createIssueDto);
    }
}