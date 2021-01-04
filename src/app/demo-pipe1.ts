import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "capitalize" })
export class DemoPipe1 implements PipeTransform {
  transform(value: string): string {
    console.log(value[0]);
    for (let i of value) {
      console.log(i);
    }

    return "Hello world";
  }
}
