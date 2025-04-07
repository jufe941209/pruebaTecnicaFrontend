import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header.component';
import { HeroComponent } from '../shared/components/hero.component';
import { FeaturesComponent } from '../shared/components/features.component';
import { InfoCardComponent} from '../shared/components/info-card.component';
import { ImageBannerComponent } from '../shared/components/image-banner.component';
import { InfographicComponent } from '../shared/components/infographic.component';
import { TestimonialsComponent } from '../shared/components/testimonials.component';
import { RegistrationFormComponent } from '../shared/components/registration-form.component';
import { FooterComponent } from '../shared/components/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    InfoCardComponent,
    ImageBannerComponent,
    FeaturesComponent,
    TestimonialsComponent,
    InfographicComponent,
    RegistrationFormComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

}
