import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FanService } from 'src/app/services/fan.service';
import { Fan } from 'src/app/types/Fan';

@Component({
  selector: 'app-fan-series',
  templateUrl: './fan-series.component.html',
  styleUrls: ['./fan-series.component.scss']
})
export class FanSeriesComponent {
  fan?: Fan

  constructor(
    private _fanService: FanService,
		private _activatedRoute: ActivatedRoute, // Récupère les infos de l'url, notamment les params
		private _router: Router  // Accès aux outils de navigation
  ){}

  ngOnInit(): void {
    // On accède aux paramètre de l'url
    const id = this._activatedRoute.snapshot.params['id'];
    // PARAMS URL TOUJOURS AU FORMAT STRING
    this.fan = this._fanService.getOne(parseInt(id));
    
		if (!this.fan) {
			this._router.navigate(['/fan']);
		}
  }
}
