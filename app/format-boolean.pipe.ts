import { Pipe } from "@angular/core";

@Pipe({name: "formatBoolean"})
export class FormatBoolean {
    transform(value: boolean): string {
        if (value) {
          return "Yes";
        } else {
          return "No";
        }
    }
}
