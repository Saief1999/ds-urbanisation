import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/generics/base.service";
import { Repository } from "typeorm";
import { Employee } from "../entities/employee.entity";

@Injectable()
export class EmployeeService extends BaseService<Employee>{

  constructor(
    @InjectRepository(Employee)
    private employeeRepository:Repository<Employee>
    ) {
      super(employeeRepository);
    }
}

