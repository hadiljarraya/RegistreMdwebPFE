import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/_services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

current_user : any

@Input("medecin") medecin :any ;
 message : any

  constructor(
    private tutorialService: TutorialService,
    private toastController : ToastController,
    private modal : ModalController) { }

  ngOnInit(): void {
    this.message = '';
  }


  

/*  getTutorial(id: string): void {
    this.tutorialService.get(this.medecin.id)
      .subscribe(
        data => {
          this.medecin.id = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }*/

  async modifyOne(item:any){
    const modal = await this.modal.create({
      component: TutorialDetailsComponent ,
      mode:'ios',
      componentProps : { medecin: item }
    });
    modal.present()
  }

  updateTutorial(): void {

    this.tutorialService.update(this.medecin.id, this.medecin)
      .subscribe(
        response => {
          this.modal.dismiss()
          this.presentToast(this.medecin.nom)
        },
        error => {
          console.log(error);
        });
  }


  async presentToast(nom:any) {
    const toast = await this.toastController.create({
      message: nom +' Modifiée avec succées',
      duration: 2000,
      position: 'top',
      mode:"ios"
    });

    await toast.present();
  }


}
