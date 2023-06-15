import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/_services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

@Input("doctor") doctor :any ;
message : any
current_user : any

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController : ToastController,
    private modal :ModalController) { }

  ngOnInit(): void {
    this.message = '';


  }

  getDoctor(id: string): void {
    this.doctorService.get(this.doctor.id)
      .subscribe(
        data => {
          this.doctor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateDoctor(): void {
    this.message = '';
    this.doctorService.update(this.doctor.id, this.doctor)
      .subscribe(
        response => {
          this.modal.dismiss()
          this.presentToast(this.doctor.nom)
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
