export interface Client {
  id:             number;
  user_id:        number;
  phone:          string;
  email:          string;
  password:       string;
  remember_token: null |  Date | string;
  created_at:     null |  Date | string;
  updated_at:     null |  Date | string;
  users:          User;
}

export interface User {
  id:         number;
  name:       string;
  surname:    string;
  dni:        string;
  genre:      string;
  photo:      string;
  created_at: null |  Date | string; 
  updated_at: null |  Date | string;
}

