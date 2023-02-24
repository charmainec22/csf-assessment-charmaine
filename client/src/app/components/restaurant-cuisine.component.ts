import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-restaurant-cuisine',
  templateUrl: './restaurant-cuisine.component.html',
  styleUrls: ['./restaurant-cuisine.component.css']
})
export class RestaurantCuisineComponent implements OnInit {
	
	// TODO Task 3
	// For View 2
  restaurant: Restaurant[] = []
   cuisine! : string
   routeSubs!: Subscription

   constructor(private restaurantSvc: RestaurantService, private activatedRoute: ActivatedRoute) {}

   ngOnInit(): void {
      this.routeSubs = this.activatedRoute.queryParams.subscribe((params) => {
        this.cuisine = params['cuisine'];
        //console.info('cuisine retrieved is', this.cuisine);
        this.getRestByCuisine();
      })
   }

   getRestByCuisine() {
    console.info('cuisine retrieved is', this.cuisine);
    this.restaurantSvc.getRestaurantsByCuisine(this.cuisine).then(res => {
      this.restaurant = res
      console.info('results', res)
    })
    .catch (err => {
      console.error('error >>> ', err)
    });
   }

}
