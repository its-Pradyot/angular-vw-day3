import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "demopipe" })
export class DemoPipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}
