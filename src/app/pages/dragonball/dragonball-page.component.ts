import { Component, computed, signal } from "@angular/core";
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: "app-dragonball-page",
  templateUrl: "./dragonball-page.component.html",
  //imports: [NgClass],
})



export class DragonballPageComponent {
  name = signal("luis");
  powerLevel = signal(100);
  




  public characters = signal<Character[]>([
    { id: 1, name: "Goku", powerLevel: 9001 },
    { id: 2, name: "Vegeta", powerLevel: 8500 },
    { id: 3, name: "Gohan", powerLevel: 7000 },
    { id: 4, name: "Piccolo", powerLevel: 6000 },
    {id:5, name:"yamcha", powerLevel: 500},
  ]);

  addCharacter(){
    if(!this.name || !this.powerLevel()  || this.powerLevel() <= 0){
      return;
    }

    const newCharacter:Character={
      //crea un hashmap y obtiene el id mas grande
      id: Math.max(0, ...this.characters().map((character) => character.id)) + 1,
      name: this.name(),
      powerLevel: this.powerLevel()
    };

    //actulizar un caracter
    this.characters.update((list) => [...list, newCharacter]);
    console.log(this.name, this.powerLevel)
  }

  resetFields(){
  this.name.set('');
  this.powerLevel.set(0);
  }


  powerClasses = computed(() => ({
    'text-danger': true,
  }));
}


function list(value: Character[]): Character[] {
  throw new Error("Function not implemented.");
}

