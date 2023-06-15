import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { TutorialService } from 'src/app/_services/tutorial.service';
import { AddTutorialComponent } from '../add-tutorial/add-tutorial.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';

@Component({
  selector: 'list-hospitals',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  items : any
  tutorials?: any[];
  currentTutorial: any = {};
  currentIndex = -1;
  title = '';
  current_user : any
  current_user_name:any
  'Access-Control-Allow-origin'= '*';

  constructor(private toastController :ToastController, private alertController : AlertController , private tutorialService: TutorialService,private modalCtrl: ModalController,private tokenstorage : TokenStorageService) { }

  ngOnInit(): void {
    this.current_user =  this.tokenstorage.getUser()
    this.getUserDashboard(this.current_user.id)
  }
  getUserDashboard(id:any){
    this.tutorialService.findByUserId(id).subscribe(data =>{
      this.items = []
      this.items = data
    })
  }
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        (data:any) => {
          this.tutorials = data;

        },
        (error:any) => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: any, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
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
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.tutorialService.delete(id).subscribe();
            alert.onDidDismiss().then((modalData) => {
              this.presentToastDelete(nom);
              this.items=[]
              this.getUserDashboard(this.current_user.id)})

          },
        },
      ],
    });

    await alert.present();
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: AddTutorialComponent ,
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
    component: TutorialDetailsComponent ,
    mode:'ios',
    componentProps : { medecin: item }
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
