import { Component, Input, input, computed } from '@angular/core';

// Input with signal
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  avatar = input.required<string>();
  name = input<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {}
}

// Input without signal
// export class UserComponent {
//   @Input({ required: true }) avatar!: string;
//   @Input({ required: true }) name!: string;

//   get imagePath() {
//     return `assets/users/${this.avatar}`;
//   }

//   onSelectUser() {}
// }
