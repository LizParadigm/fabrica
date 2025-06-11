import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Empleado } from '../../../core/models/registrarUsuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:80/api';

  constructor(private http: HttpClient) { }

  // --- 1. Autenticación ---

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/token/`;
    return this.http.post<any>(url, { username, password }).pipe(
      tap(res => {
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
      })
    );
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  refreshToken(): Observable<any> {
    const refresh = localStorage.getItem('refresh');
    return this.http.post<any>(`${this.baseUrl}/token/refresh/`, { refresh });
  }


  // --- 2. Usuarios / Empleados ---

  crearEmpleado(data: Empleado): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/empleados/`, data, {
      headers: this.getAuthHeaders()
    });
  }

  actualizarEmpleado(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/empleados/${id}/`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // --- 3. Subsistemas ---

  crearSubsistema(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/subsistemas/`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // --- 4. Sensores ---

  crearSensor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/sensores/`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // --- 5. Lecturas ---

  crearLecturaSensor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/lecturasensor/`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // --- 6. Actuadores ---

  crearActuador(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/actuadores/`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // --- 7. Eventos del actuador ---

  crearEventoActuador(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/eventos-actuador/`, data, {
      headers: this.getAuthHeaders()
    });
  }
}
