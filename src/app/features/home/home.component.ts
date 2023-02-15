import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { isValidCpf } from './domains/class/validation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cpf = new FormControl('', [isValidCpf(), Validators.required]);
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.show = true;
  }

}
