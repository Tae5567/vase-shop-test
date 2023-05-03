import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Vase } from '../shared/models/vases';
import { VaseInterface } from '../shared/interface/Vase';
//import jwt from "jsonwebtoken";
import { DETAILS_URL, SEARCH_URL, VASES_URL, ADD_URL, EDIT_URL, DELETE_URL } from '../shared/constants/urls';

const VASE_KEY = 'Vase';

@Injectable({
  providedIn: 'root'
})
export class VasesService {

  private vaseSubject = new BehaviorSubject<Vase>(this.getVaseFromLocalStorage());
  constructor(private http: HttpClient) { }

  //service file for managing API calls
  //get all vase products from data.ts
  //edit data.ts to mongodb database for already listed products
  getAll(): Observable<Vase[]>{ //getAll(): Observable<Vase[]>
    return this.http.get<Vase[]>(VASES_URL); //return this.http.get<Vase[]>('URL of data in api/db');
  }

  getAllBySearchTerm(searchTerm:string): Observable<Vase[]>{
    // make search case insensitive
    return this.http.get<Vase[]>(SEARCH_URL + searchTerm);
  }

  getVaseById(vaseId:string): Observable<Vase>{
    //show vase product details
    return this.http.get<Vase>(DETAILS_URL + vaseId);
  }

//CREATE: add new vase
addVase(newVase: VaseInterface): Observable<Vase>{
  return this.http.post<Vase>(ADD_URL, newVase).pipe(
    tap({
      next: (vase) =>{
        this.setVaseToLocalStorage(vase);
        this.vaseSubject.next(vase);
      },

    })
  )
}

//UPDATE: edit existing vase
editVase(editVase: string): Observable<Vase>{
  return this.http.put<Vase>(EDIT_URL, editVase).pipe(
    tap({
      next: (vase) =>{
        this.setVaseToLocalStorage(vase);
        this.vaseSubject.next(vase);
      },

    })
  )
}

//DELETE: delete existing vase

deleteVaseById(vaseId:string): Observable<Vase>{
  return this.http.delete<Vase>(DELETE_URL + vaseId);
}

private setVaseToLocalStorage(vase:Vase){
  localStorage.setItem(VASE_KEY, JSON.stringify(vase))
}
private getVaseFromLocalStorage(): Vase{
  const vJson = localStorage.getItem(VASE_KEY);
  if(vJson) return JSON.parse(vJson) as Vase;
  return new Vase();

}


}

