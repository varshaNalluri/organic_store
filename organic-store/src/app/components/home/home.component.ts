import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Assorted Coffee',
      price: 12.99,
      image: 'path/to/coffee-image.jpg'
    },
    {
      id: 2,
      name: 'Hand Sanitizer',
      price: 9.99,
      image: 'path/to/sanitizer-image.jpg'
    },
    {
      id: 3,
      name: 'Handpicked Red Chilies',
      price: 5.99,
      image: 'path/to/chilies-image.jpg'
    },
    {
      id: 4,
      name: 'Natural Extra Virgin Olive Oil',
      price: 14.99,
      image: 'path/to/olive-oil-image.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
