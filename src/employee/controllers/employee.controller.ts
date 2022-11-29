import { Body, Controller, Delete, Get, Param, Patch, Post, Response } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { AddEmployeeDto } from "../dtos/addEmployee.dto";
import { UpdateEmployeeDto } from "../dtos/updateEmployee.dto";
import { Employee } from "../entities/employee.entity";
import { EmployeeService } from "../services/employee.service";

@Controller("employees")
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) {
    }

    @Get()
    async listEmployees(): Promise<Employee[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    async getEmployee(@Param('id') id: number): Promise<Employee> {
        return this.employeeService.findOne(id);
    }

    @Post()
    async addEmployee(@Body() addEmployeeDto: AddEmployeeDto): Promise<Employee> {
        return this.employeeService.create(addEmployeeDto);
    }

    @Patch(':id')
    async updateEmployee(@Body() updateEmployeeDto: UpdateEmployeeDto, @Param('id') id: number): Promise<Employee> {
        return this.employeeService.update(id, updateEmployeeDto);
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: number): Promise<DeleteResult> {
        return this.employeeService.remove(id);
    }
}