import { Component,OnInit } from '@angular/core';
import { BehaviorSubject, Subject , ReplaySubject,AsyncSubject} from 'rxjs';

@Component({
  selector: 'app-subjectdemo1',
  templateUrl: './subjectdemo1.component.html',
  styleUrls: ['./subjectdemo1.component.css']
})
export class Subjectdemo1Component {


  ngOnInit():void{
    this.subjectDemo();
    this.BehaviorSubject();
    this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
//  subject will return only upcoming values and we dont have to pass initial value
  subjectDemo() {
  //  let car_publisher=new Subject();
  //  car_publisher.next('tata');

  //  let car_subscriber=car_publisher.subscribe((car)=>console.log(car));

  // let airtel=new Subject();
  // airtel.next('299 unlimited');
  // let customer=airtel.subscribe((plan)=>console.log('customer',plan));
  // airtel.next('399 unlimited');
  // let customer1=airtel.subscribe((plan)=>console.log( 'customer1',plan));
  // airtel.next('499 unlimited');

  let car_publisher = new Subject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => {
      console.log('Subscriber-1', car);
    });
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => {
      console.log('Subscriber-2', car);
    });
    car_publisher.next('Maruti');
    car_publisher.next('Toyota');
}

// behavioursubject will return one previous value and all the upcoming values and we hav to pass initial value
 BehaviorSubject() {
  let car_publisher = new BehaviorSubject('Initial Car');
  car_publisher.next('Tata');
  let subscriber1 = car_publisher.subscribe((car) => {
    console.log('Subscriber-1', car);
  });
  car_publisher.next('Honda');
  let subscriber2 = car_publisher.subscribe((car) => {
    console.log('Subscriber-2', car);
  });
  car_publisher.next('Maruti');
  car_publisher.next('Toyota');

}

// replaySubject will return all privious value and upcoming values
replaySubjectDemo() {
  let car_publisher = new ReplaySubject();
  car_publisher.next('Tata');
  let subscriber1 = car_publisher.subscribe((car) => {
    console.log('Subscriber-1', car);
  });
  car_publisher.next('Honda');
  let subscriber2 = car_publisher.subscribe((car) => {
    console.log('Subscriber-2', car);
  });
  car_publisher.next('Maruti');
  car_publisher.next('Toyota');
}



asyncSubjectDemo() {
  let car_publisher = new AsyncSubject();
  car_publisher.next('Tata');
  let subscriber1 = car_publisher.subscribe((car) => {
    console.log('Subscriber-1', car);
  });
  car_publisher.next('Honda');
  let subscriber2 = car_publisher.subscribe((car) => {
    console.log('Subscriber-2', car);
  });
  car_publisher.next('Maruti');
  car_publisher.next('Toyota');
  car_publisher.complete();
}

}
