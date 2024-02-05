export interface Employees {
  clients: Employee[]
}

export interface Employee {
  id:      number;
  name:    string;
  surname: string;
  dni:     string;
  photo:   string;
  genre:   string;
  email:   string;
  phone:   string;
  occupation: string;
  gross_salary: number;
  password?: string;
}
