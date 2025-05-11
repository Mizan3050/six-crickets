import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, catchError, interval, map, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  http = inject(HttpClient);

  secondsLeft$: Observable<any> = this.http.get("https://run.mocky.io/v3/5b4f3255-5691-46bc-a249-bea56e4a62cd").pipe(
    switchMap((response: any) =>
      interval(1000).pipe(
        take(response.secondLeft + 1), // emit one value every second, total: seconds + 1 times (including 0)
        map(i => response.secondLeft - i)
      )
    ),
    catchError(()=>{
      return of(null)
    })
  )
}
