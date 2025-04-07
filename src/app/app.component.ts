import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header.component";
import { HeroComponent } from "./shared/components/hero.component";
import { InfoCardComponent } from "./shared/components/info-card.component";
import { ImageBannerComponent } from "./shared/components/image-banner.component";
import { FeaturesComponent } from "./shared/components/features.component";
import { TestimonialsComponent } from "./shared/components/testimonials.component";
import { InfographicComponent } from "./shared/components/infographic.component";
import { RegistrationFormComponent } from "./shared/components/registration-form.component";
import { FooterComponent } from "./shared/components/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, InfoCardComponent, ImageBannerComponent, FeaturesComponent, TestimonialsComponent, InfographicComponent, RegistrationFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-prueba';
}
