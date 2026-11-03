import { Component, input } from '@angular/core';


@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})

export class CharacterList {
  characters = input.required<Character[]>();
  listName = input<string>();
}
