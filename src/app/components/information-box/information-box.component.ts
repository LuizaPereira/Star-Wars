import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-information-box',
  templateUrl: './information-box.component.html',
  styleUrls: ['./information-box.component.scss']
})
export class InformationBoxComponent implements OnInit {

  @Input('object')
  public object: any

  @Input('map-attributes')
  public mappedAttributes: string[]

  @Input('title-attribute')
  public title: string

  public informations: any[] = []

  ngOnInit() {
    const keys: string[] = Object.keys(this.object)
      .filter(key => this.filterKeys(key))

    this.informations = keys.map(key => ({
          title: key,
          description: this.object[key]
      })
    )
  }

  filterKeys(key: string) {
    return this.mappedAttributes.indexOf(key) !== -1 && key !== this.title
  }

}
