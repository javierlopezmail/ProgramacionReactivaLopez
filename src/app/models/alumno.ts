export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    email?: string;
    fechaNacimiento?: Date;
    curso: string;
  }