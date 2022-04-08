import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  username="";
  
  constructor(private modalController: ModalController) {}


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { username: this.username }
    });
   

    modal.onDidDismiss()
      .then((retval) => {
        this.username = retval.data; // {data:'',role:''}
   });
     return modal.present();
  }
}
