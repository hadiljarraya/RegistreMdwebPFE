import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/_services/service.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

import { AddServiceComponent } from 'src/app/components/add-service/add-service.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ServiceDetailsComponent } from 'src/app/components/service-details/service-details.component';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServicesListComponent implements OnInit {
  [x: string]: any;
  items : any
  services?: any[];
  currentService: any = {};
  currentIndex = -1;
  title = '';
  current_user : any
  current_user_name:any
  'Access-Control-Allow-origin'= '*';

  constructor(private toastController :ToastController ,private alertController :AlertController, private serviceService: ServiceService,private modalCtrl: ModalController,private tokenstorage : TokenStorageService) { }

  ngOnInit(): void {
    this.current_user =  this.tokenstorage.getUser()
    this.getUserDashboard(this.current_user.id)
  }
  getUserDashboard(id:any){
    this.serviceService.findByName(name).subscribe(data =>{
      this.items=[]
      this.items = data
    })
  }
  retrieveServices(): void {
    this.serviceService.getAll()
      .subscribe(
        (data:any) => {
          this.services = data;
        },
        (error:any) =>  {
          console.log(error);
        });
  }



  
    setActiveService(service: any, index: number): void {
      this.currentService = service;
      this.currentIndex = index;
    }
  
    removeAllServices(): void {
      this.serviceService.deleteAll()
        .subscribe(
          (response:any) => {
            console.log(response);
            this.refreshList();
          },
          (error:any) => {
            console.log(error);
          });
    }
    deleteOne(id:any,nom:any): void{
      this.presentAlertConfirm(id,nom)
    }
  
    async presentAlertConfirm(id:any,nom:any) {
      const alert = await this.alertController.create({
        header: 'Voulez vous supprimer '+nom+" !",
        mode:'ios',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah: any) => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'Confirmer',
            handler: () => {
              this.serviceService.delete(id).subscribe();
              alert.onDidDismiss().then((modalData) => {
                this.presentToastDelete(nom);
                this.getUserDashboard(this.current_user.id)})
            },
      },
        ],
      });
  
      await alert.present();
    }
  
    async openModal(){
      const modal = await this.modalCtrl.create({
        component: AddServiceComponent ,
        mode:'ios'
      });
      modal.present()
        modal.onDidDismiss().then((modalData) => {
          this.items=[]
          this.getUserDashboard(this.current_user.id)
         })
    
  }
  
  async modifyOne(item:any){
    const modal = await this.modalCtrl.create({
      component: ServiceDetailsComponent ,
      mode:'ios',
      componentProps : { service: item }
    });
    modal.present()
  }

  async presentToastDelete(nom:any) {
    const toast = await this.toastController.create({
      message: nom +' supprimée avec succées',
      duration: 2000,
      position: 'top',
      mode:"ios"
    });
  
    await toast.present();
  }

  }
  
  

