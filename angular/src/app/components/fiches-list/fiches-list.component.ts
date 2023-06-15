import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AddFicheComponent } from '../add-fiche/add-fiche.component';
import { FicheService } from 'src/app/_services/fiche.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-fiches-list',
  templateUrl: './fiches-list.component.html',
  styleUrls: ['./fiches-list.component.css']
})
export class FichesListComponent implements OnInit {
  [x: string]: any;

  items : any
  fiches?: any[];
  currentFiche: any = {};
  currentIndex = -1;
  title = '';
  current_user : any
  current_user_name:any
  'Access-Control-Allow-origin'= '*';

  constructor(private toastController :ToastController,private alertController :AlertController,private ficheService: FicheService,private modalCtrl: ModalController,private tokenstorage : TokenStorageService) { }

  ngOnInit(): void {
    this.current_user =  this.tokenstorage.getUser()
    this.getUserDashboard(this.current_user.id)
  }
  getUserDashboard(Name:any){
    this.ficheService.findByName(Name).subscribe((data:any )=>{
      this.items = []
      this.items = data
    })
  }
  retrieveFiche(): void {
    this.ficheService.getAll()
      .subscribe(
        (data:any) => {
          this.fiches = data;

        },
        (error:any) =>  {
          console.log(error);
        });
  }


  
    refreshList(): void {
      this.retrieveFiches();
      this.currentFiche = {};
      this.currentIndex = -1;
    }
  
    setActiveFiche(fiche: any, index: number): void {
      this.currentFiche = fiche;
      this.currentIndex = index;
    }
  
    removeAllFiches(): void {
      this.FicheService.deleteAll()
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
              this.ficheService.delete(id).subscribe();
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
        component: AddFicheComponent ,
        mode:'ios'
      });
      modal.present()
        modal.onDidDismiss().then((modalData) => {
          this.items=[]
          this.getUserDashboard(this.current_user.id)
         })
    
  }
  /*
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
      */
  }

  

  