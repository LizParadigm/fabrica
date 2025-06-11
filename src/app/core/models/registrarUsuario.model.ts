export interface Empleado {
    user: {
        username: string;
        password: string;
        email: string;
    };
    nombre: string;
    apellido_pat: string;
    apellido_mat: string;
    telefono: string;
    direccion: string;
    puesto: string;
    area: string;
}
