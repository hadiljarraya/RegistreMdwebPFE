import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/_services/service.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service = {
    name: '',
    
  };
  submitted = false;
  current_user :any

  constructor(private toastController :ToastController,private serviceService: ServiceService , private modal : ModalController ,private tokenstorage : TokenStorageService) { }

  ngOnInit(): void {
  }

  saveService(): void {
    this.current_user =  this.tokenstorage.getUser()
    const data = {
      nom: this.service.name,
      userId : this.current_user.id
     
    };

    this.serviceService.create(data)
      .subscribe(
        response => {
        this.modal.dismiss()
        this.presentToastAjouter(data.nom)
        },
        error => {
          console.log(error);
        });
  }

  newService(): void {
    this.submitted = false;
    this.service = {
      name: '',
     
    };
  }

  modalDismiss(){
    this.modal.dismiss()
  }

  async presentToastAjouter(nom:any) {
    const toast = await this.toastController.create({
      message: nom +' Ajoutée avec succées',
      duration: 2000,
      position: 'top',
      mode:"ios"
    });
  
    await toast.present();
  }

}
