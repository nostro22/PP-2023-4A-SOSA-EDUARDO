import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Usuario } from 'src/app/clases/usuario';
import { FirestoreService } from 'src/app/servicios/firestore.service';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
  readmeContent?: SafeHtml;
  usuario?:any;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer, private firebase:FirestoreService) { }

  ngOnInit() {
   //this.usuario =this.firebase.getUserData();
    const url = 'https://api.github.com/repos/nostro22/Nostro22/readme';
    const options = { headers: { Accept: 'application/vnd.github.v3.raw' } };

    this.http.get(url).subscribe((data: any) => {
      const markdown = atob(data.content); 
      // Use atob() to decode the base64-encoded content string
      const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(markdown);
      this.readmeContent = sanitizedHtml as SafeHtml;
    });
    
  }
}
