import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { IssueService } from "./issue.service";
import { CreateIssueDto } from "./dto/create-issue.dto";
import { UpdateIssueDto } from "./dto/update-issue.dto";

@Controller('issues')
export class IssueController{
    constructor(private issueService: IssueService) {}

    @Get()
    findAll(){
        return this.issueService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.issueService.findOne(+id);
    }

    @Post()
    createOne(@Body() createIssueDto: CreateIssueDto){
        return this.issueService.createOne(createIssueDto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string){
        return this.issueService.deleteOne(+id);
    }

    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto){
        return this.issueService.updateOne(+id, updateIssueDto);
    }
}