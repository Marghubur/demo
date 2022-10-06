import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  collapsed: boolean = true;
  childShow: boolean = false;

  navData: Array<any> = [{
    routerLink: 'dashboard',
    icon: 'fa fa-dashboard',
    label: 'Dashboard'
  },
  {
    routerLink: 'dashboard',
    icon: 'fa fa-users',
    label: 'Students'
  }
]

treeData: any = [
  {
    text: "Node 1",
    expanded: true,
    icon: "fa fa-folder", // requires font awesome
    nodes: [
      {
        text: "Sub Node 1",
        icon: "fa fa-folder",
        nodes: [
          {
            id:    "sub-node-1",
            text:  "Sub Child Node 1",
            icon:  "fa fa-folder",
            class: "nav-level-3",
            href:  "https://jqueryscript.net"
          },
          {
            text: "Sub Child Node 2",
            icon: "fa fa-folder"
          }
        ]
      }
    ]
  },

];
  constructor() { }

  ngOnInit(): void {

      var toggler = document.getElementsByClassName("caret");
      var i;

      for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
          this.parentElement.querySelector(".nested").classList.toggle("active");
          this.classList.toggle("caret-down");
        });
      }
  }

  expandNavbar() {
    this.collapsed = false;
    let elem = document.getElementsByClassName("side-nav-bar")[0];
    elem.classList.remove("side-nav-bar");
    elem.classList.add("expandNavbar");
    let attr = document.getElementsByClassName("main-body")[0];
    attr.classList.remove("main-body");
    attr.classList.add("expand-main-body");
  }
  closeNavbar() {
    this.collapsed = true;
    let elem = document.getElementsByClassName("expandNavbar")[0];
    elem.classList.remove("expandNavbar");
    elem.classList.add("side-nav-bar");
    let attr = document.getElementsByClassName("expand-main-body")[0];
    attr.classList.remove("expand-main-body");
    attr.classList.add("main-body");
  }

  showHideChild(index: number) {
    let elem = document.querySelectorAll('[data-name="child-detail"]')[index].classList;
    this.childShow = !this.childShow;
    if (this.childShow) {
      if (elem.contains("child-hide"))
        elem.remove("child-hide")
      elem.add('child-show');
    }
    else {
      if (elem.contains("child-show"))
        elem.remove("child-show")
      elem.add('child-hide');
    }
  }
}
