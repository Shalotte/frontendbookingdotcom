import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MservicesService {

private modals: any[]= [];

add(modal : any){
this.modals.push(modal); 
}

remove(id : string){
this.modals = this.modals.filter( x => x.id !==id);
}

open(id: string){
let modal: any = this.modals.filter(x=> x.id == id)[0];
}

close(id: string){
let modal: any = this.modals.filter(x=>x.id ==id)[0];
modal.close()
}
}
