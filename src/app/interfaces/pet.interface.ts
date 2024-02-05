export interface Pet {
  id:        number;
  photo:     string;
  name:      string;
  birthdate: Date | string;
  race:      string;
  specie:    Specie;
}

interface Specie {
  id:          number;
  name:        string;
  description: string;
}
