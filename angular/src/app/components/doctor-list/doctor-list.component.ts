import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DoctorService } from 'src/app/_services/doctor.service';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  [x: string]: any;

  items : any
  doctors?: any[];
  currentDoctor: any = {};
  currentIndex = -1;
  title = '';
  current_user : any
  current_user_name:any
  'Access-Control-Allow-origin'= '*';

  constructor(private toastController :ToastController,private alertController :AlertController,private doctorService: DoctorService,private modalCtrl: ModalController,private tokenstorage : TokenStorageService) { }

  ngOnInit(): void {
    this.current_user =  this.tokenstorage.getUser()
    this.getUserDashboard(this.current_user.id)
  }
  getUserDashboard(id:any){
    this.doctorService.findByUserId(id).subscribe(data =>{
      this.items = []
      this.items = data
    })
  }
  retrieveDoctors(): void {
    this.doctorService.getAll()
      .subscribe(
        (data:any) => {
          this.doctors = data;

        },
        (error:any) =>  {
          console.log(error);
        });
  }


  
    refreshList(): void {
      this.retrieveDoctors();
      this.currentDoctor = {};
      this.currentIndex = -1;
    }
  
    setActiveDoctor(doctor: any, index: number): void {
      this.currentDoctor = doctor;
      this.currentIndex = index;
    }
  
    removeAllDoctors(): void {
      this.doctorService.deleteAll()
        .subscribe(
          (response:any) => {
            console.log(response);
            this.refreshList();
          },
          (error:any) => {
            console.log(error);
          });
    }
    deleteOne(id:any,nom:any){
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
              this.doctorService.delete(id).subscribe();
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
        component: AddDoctorComponent ,
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
      component: DoctorDetailsComponent ,
      mode:'ios',
      componentProps : { doctor: item }
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
  


