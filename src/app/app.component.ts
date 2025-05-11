import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, catchError, interval, map, of, switchMap, take } from 'rxjs';
import { CountdownComponent } from "./countdown/countdown.component";

const API_URL = "https://run.mocky.io/v3/2203ef23-7fbb-42cf-895a-cd6bd16c1a13";

interface ApiResponse {
  secondsLeft: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private http = inject(HttpClient);

  secondsLeft$: Observable<number> = this.http.get<ApiResponse>(API_URL).pipe(
    switchMap((response: ApiResponse) =>
      interval(1000).pipe(
        take(response.secondsLeft + 1), // emit one value every second, total: seconds + 1 times (including 0)
        map(i => response.secondsLeft - i)
      )
    ),
    catchError(() => {
      return of(0)
    })
  )
}
