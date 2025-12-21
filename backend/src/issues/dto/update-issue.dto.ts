import { IsNumber, IsString } from "class-validator";

export class UpdateIssueDto{
    @IsString()
    type?: string;

    @IsString()
    description?: string;

    @IsNumber()
    lat?: number;

    @IsNumber()
    lng? :number;

    @IsString()
    status? :string;
}