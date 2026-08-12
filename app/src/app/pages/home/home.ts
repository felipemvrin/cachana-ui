import { Component } from '@angular/core';
import { BadgeComponent } from '../../components/badge/badge';
import { ButtonComponent } from '../../components/button/button';
import { CardComponent } from '../../components/card/card';
import { InputComponent } from '../../components/input/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent, CardComponent, InputComponent],
  template: `
    <main class="home-shell">
      <header class="topbar container">
        <div class="brand" aria-label="Cachaña UI home">
          <span class="brand__mark">C</span>
          <span>Cachaña UI</span>
        </div>
        <nav class="topnav" aria-label="Main navigation">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sistema">Sistema</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" class="hero container">
        <div class="hero__content">
          <app-badge variant="warning">Diseño chileno</app-badge>
          <h1 class="display-title">Un sistema de diseño con alma de carretera y bosque.</h1>
          <p>
            Cachaña UI combina identidad del sur de Chile, claridad técnica y estética retro para
            crear experiencias modernas con carácter local.
          </p>
          <div class="hero__actions">
            <app-button variant="primary">Ver proyecto</app-button>
            <app-button variant="secondary">Revisar sistema</app-button>
          </div>
          <ul class="hero__meta" aria-label="Highlights">
            <li>Design Tokens</li>
            <li>Angular 20</li>
            <li>Storybook</li>
          </ul>
        </div>

        <div class="hero__panel" aria-label="Resumen del sistema">
          <div class="route-card">
            <span class="u-label">Ruta 5</span>
            <strong>Biobío</strong>
            <small>Diseño • Tokens • Frontend</small>
            <div class="route-card__stats">
              <span>4 components</span>
              <span>1 home</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sistema" class="container section-grid">
        <app-card variant="featured">
          <app-badge variant="success">Tokens</app-badge>
          <h2>Fundamentos visuales</h2>
          <p>
            Paleta cálida, contraste claro y señales visuales inspiradas en la identidad del sur y
            la ruta.
          </p>
        </app-card>

        <app-card>
          <app-badge variant="neutral">Sistema</app-badge>
          <h2>Componentes vivos</h2>
          <p>Botones, inputs, badges y cards pensados para ser reutilizables y accesibles.</p>
        </app-card>

        <app-card>
          <app-badge variant="error">Portafolio</app-badge>
          <h2>Producto real</h2>
          <p>Una historia visual que conecta el sistema con la narrativa personal del diseñador.</p>
        </app-card>
      </section>

      <section id="proyectos" class="container work">
        <div class="section-heading">
          <app-badge variant="warning">Proyectos</app-badge>
          <h2>Un viaje por el sur</h2>
        </div>

        <div class="work__grid">
          <article class="mini-card">
            <span>01</span>
            <h3>Territorio</h3>
            <p>Un sistema visual que habla de bosque, caminos y memoria.</p>
          </article>
          <article class="mini-card">
            <span>02</span>
            <h3>Señalética</h3>
            <p>Jerarquías claras, micro detalles y lectura inmediata.</p>
          </article>
          <article class="mini-card">
            <span>03</span>
            <h3>Frontend</h3>
            <p>Angular moderno con componentes simples y escalables.</p>
          </article>
        </div>
      </section>

      <section id="sobre-mi" class="container about">
        <div class="about__copy">
          <app-badge variant="neutral">Sobre mí</app-badge>
          <h2>Diseño, código y contexto.</h2>
          <p>
            Cachaña UI no es solo una librería. Es una forma de construir productos con identidad,
            sistemas claros y una mirada profundamente local.
          </p>
        </div>

        <div class="about__form">
          <h3 class="contact-label">Contacto</h3>
          <app-input label="Nombre" placeholder="Tu nombre" ariaLabel="Nombre" />
          <app-input label="Email" type="email" placeholder="tu@email.com" ariaLabel="Email" />
          <app-button variant="primary">Enviar</app-button>
        </div>
      </section>
    </main>
  `,
  styles: `
    :host {
      display: block;
    }

    .home-shell {
      min-height: 100vh;
      background:
        radial-gradient(circle at top left, rgba(247, 199, 54, 0.25), transparent 24%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(246, 241, 231, 0.92));
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: 1.5rem;
      gap: 1rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .brand__mark {
      display: inline-grid;
      place-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: var(--radius-sm);
      background: var(--color-primary);
      color: white;
      font-size: 1rem;
    }

    .topnav {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      color: var(--color-text-muted);
      font-size: 0.9rem;
    }

    .topnav a:hover {
      color: var(--color-primary);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.4fr 0.9fr;
      align-items: center;
      gap: 2rem;
      padding-block: 3rem 4rem;
    }

    .hero__content {
      display: grid;
      gap: 1.2rem;
    }

    .display-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      max-width: 12ch;
      text-wrap: balance;
    }

    .hero__content p {
      max-width: 62ch;
      color: var(--color-text-muted);
      font-size: 1.08rem;
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .hero__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0;
      margin: 0;
      list-style: none;
      color: var(--color-text-muted);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .hero__panel {
      display: flex;
      justify-content: center;
    }

    .route-card {
      width: min(100%, 360px);
      background: linear-gradient(160deg, rgba(24, 59, 45, 0.94), rgba(37, 75, 58, 0.88));
      color: white;
      border-radius: 1.5rem;
      padding: 1.5rem;
      box-shadow: var(--shadow-md);
      display: grid;
      gap: 1rem;
    }

    .route-card strong {
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1;
    }

    .route-card small {
      color: rgba(255, 255, 255, 0.8);
    }

    .route-card__stats {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .section-grid,
    .work,
    .about {
      padding-block: 1rem 4rem;
    }

    .section-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .section-grid h2,
    .work h2,
    .about h2 {
      margin-top: 1rem;
      margin-bottom: 0.75rem;
      font-size: clamp(1.5rem, 3vw, 2.3rem);
    }

    .section-grid p,
    .work p,
    .about p {
      color: var(--color-text-muted);
      margin: 0;
    }

    .work__grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .mini-card {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      background: rgba(255, 255, 255, 0.38);
      padding: 1.5rem;
      display: grid;
      gap: 0.7rem;
    }

    .mini-card span {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-primary);
    }

    .mini-card h3 {
      font-size: 1.5rem;
    }

    .about {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 2rem;
      align-items: start;
    }

    .about__form {
      display: grid;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
    }

    .contact-label {
      font-size: var(--font-size-label);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
      color: var(--color-text-muted);
    }

    @media (max-width: 860px) {
      .hero,
      .section-grid,
      .work__grid,
      .about {
        grid-template-columns: 1fr;
      }

      .topbar {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `,
})
export class HomePageComponent {}
