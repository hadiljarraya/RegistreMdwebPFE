import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FicheService } from 'src/app/_services/fiche.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {
  fiche = {
    numDoc: '',
    doctor:'',
    nom : '',
    dateDiag : '',
    dateEnrg : '',
    hopital :'',
    service :'',
    
  };
  segment : any;
  submitted = false;
  current_user :any

  constructor(private toastController :ToastController,private ficheService: FicheService , private modal : ModalController ,private tokenstorage : TokenStorageService) { }

  ngOnInit(): void {
    //this.segment = 'less';
  }

  
  saveFiche(): void {
    this.current_user =  this.tokenstorage.getUser()
    const data = {
      numDoc: this.fiche.numDoc,
      nom : this.fiche.nom,
      userId : this.current_user.id,
      doctor : this.fiche.doctor,
      dateDiag : this.fiche.dateDiag,
      dateEnrg : this.fiche.dateEnrg,
      hopital : this.fiche.hopital,
      service : this.fiche.service
    };

    this.ficheService.create(data)
      .subscribe(
        response => {
        this.modal.dismiss()
        this.presentToastAjouter(data.numDoc)
        },
        error => {
          console.log(error);
        });
  }

  newFiche(): void {
    this.submitted = false;
    this.fiche = {
      numDoc: '',
      doctor:'',
      nom : '',
      dateDiag : '',
      dateEnrg : '',
      hopital :'',
      service :'',
      
     
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
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
 
