import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farmers-option',
  templateUrl: './farmers-option.component.html',
  styleUrls: ['./farmers-option.component.css']
})
export class FarmersOptionComponent implements OnInit {

  constructor(private router: Router) { }
  gotoregisterproduct(){
    this.router.navigate(['/register-cultivated-product']);  // define your component where you want to go
    //alert("Onclick working");
    console.log("ha ha ha......");
  }

  ngOnInit(): void {
  }

}
