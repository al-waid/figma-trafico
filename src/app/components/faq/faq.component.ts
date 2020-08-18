import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  qrs = [
    {
      id: 1,
      q: "What is a professional traffic permit?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 2,
      q: "When is a professional traffic permit needed?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 3,
      q: "Where to look for a traffic permit?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 4,
      q: "Are there differences between a traffic permit and a professional traffic permit?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 5,
      q: "How to check the traffic condition?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 6,
      q: "How much does a commercial traffic permit cost for goods?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 7,
      q: "What are the requirements for a professional traffic permit?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 8,
      q: "How to plug in for the traffic permit test?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 9,
      q: "Are there professional traffic permit training courses at a distance?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
    {
      id: 10,
      q: "How is the sample for a professional traffic permit booked?",
      r: "Traffic permits are a requirement for conducting professional traffic."
    },
  ];
  ngOnInit(): void {
  }

}
