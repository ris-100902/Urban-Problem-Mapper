import { IsNumber, IsString } from "class-validator";

export class CreateIssueDto {
    @IsString()
    type: string;

    @IsString()
    description: string;

    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;
}