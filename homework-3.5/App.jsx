import { Header } from './components/Header/Header'
import { ProductGrid } from './components/ProductGrid/ProductGrid'
import { SparkIcon } from './components/Icons'
import { useThemeStore } from './store/useThemeStore'

function App() {
  const theme = useThemeStore((state) => state.theme)

  return (
    <div className="app-shell" data-theme={theme} id="top">
      <Header />

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <SparkIcon /> Новая коллекция 2026
            </p>
            <h1 id="hero-title">
              Технологии, которые <em>хочется</em> взять с собой
            </h1>
            <p className="hero-description">
              Продуманные гаджеты для учёбы, работы и отдыха. Добавляйте то,
              что понравилось, в избранное одним нажатием.
            </p>
            <a className="primary-button" href="#catalog">
              Смотреть каталог <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-large" />
            <div className="orb orb-small" />
            <div className="hero-card hero-card-front">
              <span>36 ч</span>
              <small>без подзарядки</small>
            </div>
            <div className="hero-card hero-card-back">
              <span>4.9</span>
              <small>оценка покупателей</small>
            </div>
          </div>
        </section>

        <section className="catalog-section container" id="catalog" aria-labelledby="catalog-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Выбор редакции</p>
              <h2 id="catalog-title">Популярные товары</h2>
            </div>
            <p>6 товаров</p>
          </div>
          <ProductGrid />
        </section>

        <section className="benefits container" id="benefits" aria-label="Преимущества магазина">
          <article>
            <span>01</span>
            <div>
              <h3>Быстрая доставка</h3>
              <p>По Бишкеку — в течение одного дня.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Официальная гарантия</h3>
              <p>12 месяцев на каждый товар.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Простой возврат</h3>
              <p>Поможем, если покупка не подошла.</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="logo" href="#top" aria-label="NOVA — наверх">
            <span className="logo-mark">N</span>
            <span>NOVA</span>
          </a>
          <p>Учебный проект для Geeks · 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App

