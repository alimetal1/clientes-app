import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Usuario } from "../usuarios/usuario";

@Injectable()
export class PostService {
    private urlEndPoint: string = 'http://localhost:8080/api/publicaciones';
      constructor(private http: HttpClient, private router: Router) { }
    
      getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.urlEndPoint + '/usuarios');
      }
}