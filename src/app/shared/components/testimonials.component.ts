import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Componente TestimonialsComponent
 * 
 * Este componente muestra un slider de testimonios que puede navegarse de manera manual.
 * Se adapta al tamaño de pantalla (responsive) para ajustar su comportamiento en dispositivos móviles.
 */
@Component({
  selector: 'app-testimonials',
  standalone: true, // ✅ Este componente es standalone, no necesita ser declarado en un módulo.
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule], // ✅ Importa módulos comunes y de Angular Material.
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  
  /** Índice actual del testimonio que se está mostrando */
  currentIndex = 0;

  /** Lista de testimonios que se van a mostrar */
  testimonials = [
    {
      name: 'Mauris vulputate',
      text: `Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.<br><br>Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.`,
      image: 'assets/images/testimonial1.png'
    },
    {
      name: 'Lorem sed lacus',
      text: `Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.<br><br>Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.`,
      image: 'assets/images/testimonial2.png'
    },
    {
      name: 'Lacus efficitur',
      text: `Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.<br><br>Nulla at nulla mattis, placerat arcu ut, ornare libero. Etiam sit amet urna efficitur, auctor magna nec, pellentesque magna. Ut at libero et risus convallis facilisis.`,
      image: 'assets/images/testimonial3.png'
    }
  ];

  /** Variable para detectar si el dispositivo es móvil */
  isMobile: boolean = false;

  /**
   * Método que pasa al siguiente testimonio en la lista.
   * Cuando llega al final, vuelve al primer testimonio (ciclo infinito).
   */
  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  /**
   * Método que selecciona manualmente un testimonio específico.
   * @param index Índice del testimonio que se quiere mostrar.
   */
  selectTestimonial(index: number) {
    this.currentIndex = index;
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Configura la detección de cambios de tamaño de pantalla.
   */
  ngOnInit() {
    this.checkScreenSize(); // Comprueba el tamaño actual
    window.addEventListener('resize', () => this.checkScreenSize()); // Vuelve a comprobar si cambia el tamaño
  }

  /**
   * Método que determina si el dispositivo es móvil basándose en el ancho de la ventana.
   */
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Si es menor a 768px, consideramos que es móvil
  }
}