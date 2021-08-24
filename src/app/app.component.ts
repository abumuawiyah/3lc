import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {}
  links = [
    { label: 'Happy', value: 1 },
    { label: 'Neutral', value: 2 },
    { label: 'Dispointed', value: 3 }
  ];

  getIcon(val) {
    const icons = {
      '1': 'mood',
      '2': 'sentiment_neutral',
      '3': 'sentiment_very_dissatisfied'
    };
    return icons[val];
  }

  displaySelectedValue(val) {
    const link = this.links.find(l => l?.value === val);
    return link?.label;
  }

  onClickedOutside(e: Event, toggleIsOpen) {
    toggleIsOpen();
  }
}
