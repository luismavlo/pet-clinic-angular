export interface Employee {
  id:             number;
  occupation:     string;
  gross_salary:   number;
  email:          string;
  password:       string;
  phone:          string;
  user_id:        number;
  remember_token: null | string;
  created_at:     string | null | Date;
  updated_at:     string | null | Date;
  users:          User;
}
export interface User {
  id:         number;
  name:       string;
  surname:    string;
  dni:        string;
  genre:      string;
  photo:      string;
  created_at: string | null | Date;
  updated_at: string | null | Date;
}
