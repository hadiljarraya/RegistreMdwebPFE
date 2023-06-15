import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DoctorService } from 'src/app/_services/doctor.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor = {
    name: '',
    prénom: '',
    
    adress: '',
    tel: '',
    email: '',
  };
  submitted = false;
  current_user : any

  constructor(private tokenstorage :TokenStorageService,private doctorService: DoctorService , private modal : ModalController,private toastController :ToastController) { }

  ngOnInit(): void {
  }

  saveDoctor(): void {
    this.current_user =  this.tokenstorage.getUser()
    const data = {
      nom: this.doctor.name,
     
      adress: this.doctor.adress,
      tel: this.doctor.tel,
      email: this.doctor.email,
      userId : this.current_user.id
    };

    this.doctorService.create(data)
      .subscribe(
        response => {
          this.modal.dismiss()
          this.presentToastAjouter(data.nom)
        },
        error => {
          console.log(error);
        });
  }

  newDoctor(): void {
    this.submitted = false;
    this.doctor = {
      name: '',
      prénom:'',
      
      adress: '',
      tel: '',
      email: '',
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
