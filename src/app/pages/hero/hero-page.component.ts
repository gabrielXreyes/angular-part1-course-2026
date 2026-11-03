import { Component, computed, signal } from "@angular/core";
import {UpperCasePipe} from "@angular/common";

@Component({
selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  imports: [ UpperCasePipe ]
})


export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);


     //señal computada con funciones flecha
    heroDescription= computed(()=>{
        const description = `${ this.name()} - ${ this.age() } `;
        return description; 
    });

    capitalizedName= computed(()=>{
        return this.name().toUpperCase();
    });


    getHeroDescription(){
        return `${ this.name().toUpperCase() } - ${ this.age() }`;
    }

    changeHero(){
        this.name.set('spider-man');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
    }
}