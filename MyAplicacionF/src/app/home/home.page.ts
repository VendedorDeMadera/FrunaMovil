import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:String = '';
 
  constructor(public alertController: AlertController,private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params => {
     
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario=this.router?.getCurrentNavigation()?.extras?.state?.['user'];
     
      }
    });
  }

  cerrar(){
    localStorage.removeItem('ingresado');
  }


  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

