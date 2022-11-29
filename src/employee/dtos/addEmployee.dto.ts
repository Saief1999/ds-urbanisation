import { IsDecimal, IsNotEmpty, IsNumber } from "class-validator";


export class AddEmployeeDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    salaryInDinars: number;
}