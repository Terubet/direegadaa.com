import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Add drop down menu arrow indicators for categories with subcategories
    $("li.cat-parent").children("a").after("<span class='dropDownMenu'>^</span>");

    //Set current category to be expanded on page load if top level category is active
    $("li.current-cat").children(".dropDownMenu").addClass("active");
    $("li.current-cat").children(".children").addClass("active");

    //Set current category to be expanded on page load if subcategory is active
    $("li.current-cat").parent("ul.children").addClass("active");
    $("ul.children.active").siblings(".dropDownMenu").addClass("active");

    //When click on down arrow, reveal submenu
    $(".dropDownMenu").click(function () {
      $(this).toggleClass("active");
      $(this).next().toggleClass("active");
    });
  }

}
