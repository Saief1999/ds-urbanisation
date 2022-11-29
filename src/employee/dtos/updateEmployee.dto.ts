import { PartialType } from "@nestjs/mapped-types";
import { AddEmployeeDto } from "./addEmployee.dto";

export class UpdateEmployeeDto extends PartialType(AddEmployeeDto) {
}