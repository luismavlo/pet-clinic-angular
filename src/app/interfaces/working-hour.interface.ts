export interface WorkingHour {
  id?:                   number;
  start_date:           Date | string;
  end_date:             Date | string;
  appointment_duration: number;
  start_hour:           string;
  shift_duration:       number;
  end_hour:             string;
  employee_id:          number;
  remember_token?:       null | string;
  created_at?:           Date | string | null;
  updated_at?:           Date | string | null;
  employees:            Employees;
}

export interface Employees {
  id:             number;
  occupation:     string;
  gross_salary:   number;
  email:          string;
  password:       string;
  phone:          string;
  user_id:        number;
  remember_token: null | string;
  created_at:     Date | string | null;
  updated_at:     Date | string | null;
}

export interface WorkingHourState {
  id?:                   number;
  start_date:           Date | string;
  end_date:             Date | string;
  appointment_duration: number;
  start_hour:           string;
  shift_duration:       number;
  end_hour:             string;
  employee_id:          number;
  remember_token?:       null | string;
  created_at?:           Date | string | null;
  updated_at?:           Date | string | null;
}
