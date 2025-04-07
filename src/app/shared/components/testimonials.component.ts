import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-testimonials',
  standalone: true,
 imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  currentIndex = 0;

  testimonials = [
    {
      name: 'Mauris vulputate',
      text: `Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere. Sed nec risus vitae quam tincidunt bibendum. Cras a fermentum mauris, vel aliquet sem. Nullam commodo turpis id risus tincidunt, sed feugiat turpis tristique.<br><br>Curabitur sit amet magna vitae velit facilisis pretium. Morbi vel dui ac erat laoreet hendrerit. Sed gravida magna in elit finibus, nec egestas augue cursus. Phasellus vitae nisi nec nulla efficitur tincidunt.`,
      image: 'assets/images/testimonial1.png'
    },
    {
      name: 'Lorem sed lacus',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius, urna at hendrerit vehicula, metus erat iaculis nibh, nec elementum massa urna in quam. Integer id risus eget nulla varius volutpat.<br><br>Aenean dignissim, sapien nec tempor posuere, sapien lacus volutpat lectus, nec ullamcorper arcu tortor sed est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
      image: 'assets/images/testimonial2.png'
    },
    {
      name: 'Lacus efficitur',
      text: `Phasellus nec feugiat sapien. Donec at turpis ac erat finibus blandit. Duis fermentum, nibh in vulputate tincidunt, nulla arcu scelerisque sapien, sed posuere urna justo sed eros. Nullam tincidunt ante sed risus vulputate, in tincidunt tellus varius.<br><br>Praesent faucibus justo vitae velit lacinia, ac dictum magna hendrerit. Sed bibendum, libero a ultrices consequat, sapien ante aliquam libero, id cursus lorem ex vitae justo.`,
      image: 'assets/images/testimonial3.png'
    }
  ];

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  selectTestimonial(index: number) {
    this.currentIndex = index;
  }

  isMobile: boolean = false;

ngOnInit() {
  this.checkScreenSize();
  window.addEventListener('resize', () => this.checkScreenSize());
}

checkScreenSize() {
  this.isMobile = window.innerWidth < 768; // <768px es mobile
}

}

