import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TutorialService } from 'src/app/_services/tutorial.service';

@Component({
  selector: 'add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    name: '',
   
    adress: '',
    email: '',
    tel: '',
  };
  current_user :any

  constructor(private toastController :ToastController,private tutorialService: TutorialService , private modal : ModalController , private tokenstorage :TokenStorageService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    this.current_user =  this.tokenstorage.getUser()
    const data = {
      nom: this.tutorial.name,
      adress: this.tutorial.adress,
      email: this.tutorial.email,
      tel: this.tutorial.tel,

      userId : this.current_user.id

    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          this.modal.dismiss()
          this.presentToastAjouter(data.nom)
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.tutorial = {
      name: '',
      
      adress: '',
      email: '',
      tel: '',
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
