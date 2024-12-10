export interface Animal {
  avian: boolean;
  canine: boolean;
  earthAnimal: boolean;
  earthInsect: boolean;
  feline: boolean;
  name: string;
  uid: string;
}

export interface Animals {
  Animals: Array<Animal>;
}
