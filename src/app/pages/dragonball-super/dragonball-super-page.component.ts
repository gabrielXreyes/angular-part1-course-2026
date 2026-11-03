import { Component, computed, inject, signal } from "@angular/core";
import { NgClass } from "@angular/common";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import {DragonballCharacterAdd} from "../../components/dragonball/character-add/character-add";
import { DragonballService } from "../../services/dragonball.services";
interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: "app-dragonball-super-page",
  templateUrl: "./dragonball-super-page.component.html",
  imports: [CharacterList, DragonballCharacterAdd],
  //imports: [NgClass],
})



export class DragonballSuperPageComponent {
  //inyectar el servicio de dragonball
 // constructor(public dragonballService: DragonballService) {}
 public dragonballService = inject(DragonballService);
}


