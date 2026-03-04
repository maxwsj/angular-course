import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// only bootstrapping the root component; other components are brought in via
// imports and used in its template.
bootstrapApplication(AppComponent).catch((err) => console.error(err));
