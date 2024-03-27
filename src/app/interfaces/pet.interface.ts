export interface Pet {
  id:             number;
  client_id:      number;
  photo:          string;
  name:           string;
  birthdate:      Date | string | null;
  race:           string;
  specie_id:      number;
  remember_token: null | string;
  created_at:     Date | string | null;
  updated_at:     Date | string | null;
  specie:         Specie;
  client:         Client;
}

export interface Client {
  id:             number;
  user_id:        number;
  phone:          string;
  email:          string;
  password:       string;
  remember_token: null | string;
  created_at:     Date | string | null;
  updated_at:     Date | string | null;
}

export interface Specie {
  id:             number;
  name:           string;
  descripcion:    string;
  photo:          string;
  remember_token: null | string;
  created_at:     Date | string | null;
  updated_at:     Date | string | null;
}

