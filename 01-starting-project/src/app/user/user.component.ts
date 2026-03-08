import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

// Input without signal
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>(); // Output decorator with EventEmitter
  // select = output<string>(); // output signal

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// Input with signal
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input<string>();

//   imagePath = computed(() => `assets/users/${this.avatar()}`);

//   onSelectUser() {}
// }
