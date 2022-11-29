import { Controller, Get, Param } from "@nestjs/common";
import { dinarsToDollars, dinarsToEuros } from "src/generics/utils";
import { SalaryRepsonseDto } from "../dtos/salaryResponse.dto";
import { EmployeeService } from "../services/employee.service";


@Controller("salaries")
export class SalaryController {

    constructor(private readonly employeeService: EmployeeService) {
    }

    @Get("/euros/:id")
    async getSalaryInEuros(@Param('id') id: number): Promise<SalaryRepsonseDto> {
        const employee = await this.employeeService.findOne(id);
        const salary = dinarsToEuros(employee.salaryInDinars)
        const salaryRepsonseDto = new SalaryRepsonseDto(salary)

        return salaryRepsonseDto;
    }


    @Get("/dollars/:id")
    async getSalaryInDollars(@Param('id') id: number): Promise<SalaryRepsonseDto> {
        const employee = await this.employeeService.findOne(id);
        const salary = dinarsToDollars(employee.salaryInDinars)
        const salaryRepsonseDto = new SalaryRepsonseDto(salary)

        return salaryRepsonseDto
    }

}