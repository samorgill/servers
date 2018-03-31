import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';
import {applyChanges} from '@angular/cli/lib/ast-tools';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{

  @Input('myEl') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;

  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');

  }


  ngDoCheck(){
    console.log('ngDoCheckCalled');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Heading: ', this.header.nativeElement.textContent);
    console.log('ContentChild: ', this.paragraph.nativeElement);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
