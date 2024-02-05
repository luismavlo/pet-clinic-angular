export interface Clients {
  clients: Client[]
}

export interface Client {
  id:      number;
  name:    string;
  surname: string;
  dni:     string;
  photo:   string;
  genre:   string;
  email:   string;
  phone:   string;
  password?: string;
}
