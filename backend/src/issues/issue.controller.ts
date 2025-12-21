import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { IssueService } from "./issue.service";
import { CreateIssueDto } from "./dto/create-issue.dto";
import { UpdateIssueDto } from "./dto/update-issue.dto";
import { AuthorizationGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/roles/roles.guard";
import { Roles } from "src/roles/roles.decorator";
import { Role } from "src/roles/roles.enum";

@Controller('issues')
@UseGuards(AuthorizationGuard, RolesGuard)
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
    createOne(@Req() req, @Body() createIssueDto: CreateIssueDto){
        return this.issueService.createOne(createIssueDto, req.user.sub);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    deleteOne(@Param('id') id: string){
        return this.issueService.deleteOne(+id);
    }

    @Patch(':id')
    @Roles(Role.Admin)
    updateOne(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto){
        return this.issueService.updateOne(+id, updateIssueDto);
    }
}