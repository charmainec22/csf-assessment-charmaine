import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit{

	// TODO Task 2
	// For View 1
  restaurant: Restaurant[] = []
  routeSubs!: Subscription
  cuisine! : string

  constructor (private restaurantSvc : RestaurantService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.routeSubs = this.activatedRoute.queryParams.subscribe((params) => {
        this.cuisine = params['cuisine'];
        this.getCuisine();
      })
      
  }

  getCuisine() {
    this.restaurantSvc.getCuisineList().then(res => {
      this.restaurant = res
      console.info('results', res)
    })
    .catch (err => {
      console.error('error >>> ', err)
    });
  }
}
