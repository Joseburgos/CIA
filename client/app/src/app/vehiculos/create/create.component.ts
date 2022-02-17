import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public vehiculoService: VehiculoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      description:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      type: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      numberTire: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$")]),
      horsePower: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$")])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vehiculoService.create(this.form.value).subscribe(res => {
         console.log('Vehicle created successfully!');
         this.router.navigateByUrl('vehiculos/index');
    })
  }

}
