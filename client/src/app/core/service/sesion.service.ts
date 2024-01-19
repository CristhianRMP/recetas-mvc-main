import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import config from 'config/config';

const estadoSesion: boolean = false;

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private urlSesion: string = config.URL_API_BASE + 'usuario';

  // BehaviorSubject
  private sesion$ = new BehaviorSubject<boolean>(estadoSesion);

  // Metodo para cambiar el valor del BehaviorSubject
  get selectSesion$(): any {
    return this.sesion$.asObservable();
  }

  setSesion(valor: any) {
    this.sesion$.next(valor);
  }

  constructor(private http: HttpClient) {}

  valSesion(data: any) {
    return this.http.post<any>(
      this.urlSesion,
      { data },
      { withCredentials: true }
    );
  }
}
