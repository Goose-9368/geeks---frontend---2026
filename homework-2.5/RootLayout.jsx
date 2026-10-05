import { Link, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-content">
          <Link className="brand" to="/users" aria-label="К списку пользователей">
            <span className="brand-mark" aria-hidden="true">
              U
            </span>
            <span>
              <strong>Users</strong>
              <small>React Router</small>
            </span>
          </Link>

          <span className="lesson-badge">Geeks · Homework</span>
        </div>
      </header>

      <main className="container main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>React Router loaders</span>
          <span>JSONPlaceholder API</span>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout
