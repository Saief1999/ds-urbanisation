import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./controllers/employee.controller";
import { SalaryController } from "./controllers/salary.controller";
import { Employee } from "./entities/employee.entity";
import { EmployeeService } from "./services/employee.service";


@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    controllers: [EmployeeController, SalaryController],
    providers: [EmployeeService]
})
export class EmployeeModule { }