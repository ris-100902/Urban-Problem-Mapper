import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Issue } from "./entities/issue.entity";
import { IssueService } from "./issue.service";
import { IssueController } from "./issue.controller";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Issue]), AuthModule],
    controllers: [IssueController],
    providers: [IssueService]
})
export default class IssueModule {

}