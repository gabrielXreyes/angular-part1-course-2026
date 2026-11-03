import { effect, Injectable, signal } from '@angular/core';

// esto es una interfaz para definir la estructura de un personaje y leer el archivo character.interface.ts
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters') ;
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  //carga de los personajes desde el localStorage
  public characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })


  addCharacter(newCharacter: Character){
    if(!newCharacter.name.trim() || !Number.isFinite(newCharacter.powerLevel) || newCharacter.powerLevel <= 0){
      return;
    }

    //actulizar un caracter
    this.characters.update((list) => [...list, newCharacter]);
  }

}