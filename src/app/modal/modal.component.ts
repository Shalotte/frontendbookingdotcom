import { Component,  ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService} from '../modal.service';
@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

@Input() id: string;
private element: any;
private jwmodal;

constructor(private modalService: ModalService, private el: ElementRef) {
  this.element = el.nativeElement;
}

ngOnInit(): void {

if(!this.id){
console.error('modal must have an id');
return;
}

document.body.appendChild(this.element);
this.modalService.add(this);

}


ngOnDestroy(): void {
this.modalService.remove(this.id);
this.element.remove();
}

open(): void {
this.element.style.display= 'block';
document.body.classList.add('jw-modal-open');
}

// close modal
close(): void {
this.element.style.display = 'none';
document.body.classList.remove('jw-modal-open');
}

function(event) {
if (event.target === 'jwmodal') {
this.jwmodal.style.display = "none";
}
}

}
