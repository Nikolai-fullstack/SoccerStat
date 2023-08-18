import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-league',
  templateUrl: './one-league.component.html',
  styleUrls: ['./one-league.component.scss'],
})
export class OneLeagueComponent {
  @Input() id: number;

  @Input() nameOfLeague: string;

  @Input() countryOfLeague: string;

  @Input() image: string | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  goToCalendarOfLeague() {
    this.router.navigate([`calendar-of-league/${this.id}`], {
      queryParams: { name: `${this.nameOfLeague}` },
    });
  }
}
