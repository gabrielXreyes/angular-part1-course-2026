import { Component, computed, output, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class DragonballCharacterAdd {
  name = signal("");
  powerLevel = signal(0);
  
  



  //output para enviar el nuevo personaje al componente padre
  onNewCharacter= output<Character>();

  addCharacter(){
    if(!this.name().trim() || !this.powerLevel() || this.powerLevel() <= 0){
      return;
    }

    const newCharacter:Character={
      //crea un hashmap y obtiene el id mas grande
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      powerLevel: this.powerLevel()
    };

    //actulizar un caracter
    this.onNewCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
  this.name.set('');
  this.powerLevel.set(0);
  }


  powerClasses = computed(() => ({
    'text-danger': true,
  }));
}
