import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

private jwmodals: any[] =[];

constructor() { }

add(jwmodal: any){
this.jwmodals.push(jwmodal);
}
  
  
remove(id : string){
this.jwmodals= this.jwmodals.filter(x => x.id !== x); 
}
  
open(id : string){
let jwmodal: any = this.jwmodals.filter(x=> x.id===id)[0]; 
jwmodal.open();
}
  
  
close(id : string){
let jwmodal: any = this.jwmodals.filter(x => x.id ===id)[0];
jwmodal.close();
}

}
