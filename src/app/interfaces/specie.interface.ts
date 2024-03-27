export interface Specie {
  id:             number;
  name:           string;
  descripcion:    string;
  photo:          string;
  remember_token: null | null;
  created_at:     null | string | Date;
  updated_at:     null | string | Date;
}
