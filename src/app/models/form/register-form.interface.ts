import { FormControl } from "@angular/forms";

export interface RegisterForm {
    username: FormControl<string>;
    password: FormControl<string>;
    displayName: FormControl<string>;
    betaPassword: FormControl<string>;
}