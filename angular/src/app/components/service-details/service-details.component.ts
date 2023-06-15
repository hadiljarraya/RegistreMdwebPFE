import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/_services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

 
  message = '';
  @Input ('service') service: any;

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modal : ModalController,
    private toastController : ToastController) { }

  ngOnInit(): void {

  }

  getService(id: string): void {
    this.serviceService.get(this.service.id)
      .subscribe(
        data => {
          this.service = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  updateService() {
    this.message = '';
    this.serviceService.update(this.service.id, this.service)
      .subscribe(
        response => {
         this.modal.dismiss()
         this.presentToast(this.service.nom)
        },
        error => {
        });
  }

  deleteService() {
    this.serviceService.delete(this.service.id)
      .subscribe(
        response => {
          this.router.navigate(['/services']);
        },
        error => {
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
