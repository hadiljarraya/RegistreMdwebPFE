import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  selected:any
  constructor() { }

  ngOnInit(): void {}

  showStat(){
    console.log(this.selected)
 
      var myChart = new Chart("myChart", {  
      type: 'bar',
      data: {
          labels: ['De 2 à 15 ans', 'De 15 à 25 ans', 'De 25 à 45 ans','De 45 à 90 ans et plus'],
          datasets: [{
              label: 'Homme',
              data: [50, 40,30,15],
              backgroundColor:"#3c2b97",
              
          },
          {
            label: 'Femme',
            data: [30,20,15,12],
            backgroundColor:"#FFAF00",
        
            },
        
      ]
      },
     
     
  });

  var myChart2 = new Chart("myChart2", {
    
    type: 'pie', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: ['De 2 à 15 ans', 'De 15 à 25 ans', 'De 25 à 45 ans','De 45 à 90 ans et plus'],
       datasets: [{
  label: 'De 2 à 15 ans',
  data: [450, 240,150,100],
  backgroundColor: [
    
    "#3c2b97",
    "#FFAF00",
    '#85bf3a',
    '#c9c9e4'
  ],
  

  

}],
    },
    options: {
      aspectRatio:2.5
    }

  });
  

}

  

}
