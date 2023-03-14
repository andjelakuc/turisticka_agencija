import { Component, OnInit } from '@angular/core';
import { Aranzman } from 'src/models/aranzman';
import { AranzmanService } from '../services/aranzman.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private AranzmanService:AranzmanService) { }

  brojAranzmanaTest:string;
  nePostojiAranzmanTest: string;
  ngOnInit(): void {
    
    this.AranzmanService.dohvaiBrojAranzmana("","","","",null).subscribe((broj: number)=>{
      console.log("usao16:  " +broj);
      if(broj == 60000)
          this.brojAranzmanaTest="Uspesno provererano da ima 60000 aranzmana";
        else
        this.brojAranzmanaTest="Test nije prosao jer je broj aranzmana " + broj;
    })

    this.AranzmanService.dohvatiAranzmanePretraga(50,50,"Probni aranzman", "", "", "", null).subscribe((aranzman: Aranzman)=>{
      if(aranzman == null){
        this.nePostojiAranzmanTest = "Uspešno provereno da aranžman sa nazivom 'Probni aranzman' još nije dodat u bazu";
      }
      else{
        this.nePostojiAranzmanTest = "Test nije prošao jer je aranžman " + aranzman;
      }
    })

  }
  	
}


