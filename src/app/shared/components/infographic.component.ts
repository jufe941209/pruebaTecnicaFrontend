import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-infographic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infographic.component.html',
  styleUrl: './infographic.component.scss'
})
export class InfographicComponent {

  faqs = [
    {
      question: '¿Quid est Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum eget hendrerit ut convallis, curabitur facilisis vulputate taciti nunc nam. Netus cras pellentesque urna eu aenean sem mattis felis, sodales libero in molestie massa sapien est magnis habitant, himenaeos mauris imperdiet et laoreet tempus conubia.'
    },
    {
      question: '¿Cur Lorem Ipsum utimur?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur pretium sapien justo vitae turpis pulvinar, gravida sed sem malesuada mauris euismod. Integer non nisi eget leo vulputate suscipit, a fermentum elit commodo aenean.'
    },
    {
      question: '¿Unde venit Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipiscing elit volutpat proin integer posuere, venenatis taciti sagittis suspendisse. Purus lacinia at aliquet diam vitae, fermentum at neque facilisis dapibus.'
    },
    {
      question: '¿Ubi possum invenire Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, fermentum pulvinar diam sagittis dictum, volutpat donec ut cras metus felis dignissim nulla. Vitae eget condimentum magna et facilisis.'
    },
    {
      question: '¿Estne tutum Lorem Ipsum uti?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla lacus turpis, tristique posuere eros congue fames pharetra. Etiam sapien nunc, vulputate ut posuere quis, laoreet sed justo nec nulla.'
    },
    {
      question: '¿Quae sunt alternativa ad Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vehicula orci. Sed euismod, augue nec laoreet convallis, metus sem finibus est, a posuere lorem magna et lacus non urna.'
    }
  ];
  
  openedIndex: number | null = null;

  toggle(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}

