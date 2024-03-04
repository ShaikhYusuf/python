import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/quiz.service";

@Component({
  selector: "home-quiz",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  
  subjectList = [
    { title: 'Python' }
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  learn (index: number) {
    switch(index) {
      case 0: this.router.navigate(['/learn/python']); break;
    }
  }

  quiz(index: number) {
    switch(index) {
      case 0: this.router.navigate(['/subject/python']); break;
    }
    
  }
}
