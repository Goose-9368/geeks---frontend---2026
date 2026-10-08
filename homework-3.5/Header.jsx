import { useSelector } from 'react-redux'
import { selectFavoritesCount } from '../../features/favorites/favoritesSlice'
import { useThemeStore } from '../../store/useThemeStore'
import { HeartIcon, MoonIcon, SunIcon } from '../Icons'

export function Header() {
  const favoritesCount = useSelector(selectFavoritesCount)
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const isDark = theme === 'dark'

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="NOVA — на главную">
          <span className="logo-mark">N</span>
          <span>NOVA</span>
        </a>

        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#catalog">Каталог</a>
          <a href="#benefits">Почему мы</a>
        </nav>

        <div className="header-actions">
          <div className="favorites-summary" aria-label={`Избранных товаров: ${favoritesCount}`}>
            <HeartIcon filled={favoritesCount > 0} />
            <span className="favorites-label">Избранное</span>
            <span className="favorites-count" aria-live="polite">
              {favoritesCount}
            </span>
          </div>

          <button
            className="icon-button theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
            title={isDark ? 'Светлая тема' : 'Тёмная тема'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}

