import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http'
import { Observable, throwError  } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Lancamento } from '../models/lancamento'

@Injectable({
  providedIn: 'root'
})

export class LancamentoService 
{

  constructor(private http: HttpClient) 
  {
    
  }
  opcoes = 
  {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  } 
  
  getDados() : Observable<Lancamento[]> 
  {
    return this.http.get<Lancamento[]>(environment.fonteDeDados);
  }

}

