export interface Client {
  id:             number;
  user_id:        number;
  phone:          string;
  email:          string;
  password:       string;
  remember_token: null |  Date | string;
  created_at:     null |  Date | string;
  updated_at:     null |  Date | string;
  users:          Users;
}



export interface Users {
  id:         number;
  name:       string;
  surname:    string;
  dni:        string;
  genre:      string;
  photo:      string;
  created_at: null |  Date | string;
  updated_at: null |  Date | string;
}

export interface ClientPost {
  name:       string;
  surname:    string;
  dni:        string;
  email:      string;
  password:   string;
  phone:      string;
  genre:      string;
  photo:      string;
}

