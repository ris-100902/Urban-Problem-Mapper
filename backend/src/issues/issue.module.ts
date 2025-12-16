import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Issue } from "./entities/issue.entity";
import { IssueService } from "./issue.service";
import { IssueController } from "./issue.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Issue])],
    controllers: [IssueController],
    providers: [IssueService]
})
export default class IssueModule{

}