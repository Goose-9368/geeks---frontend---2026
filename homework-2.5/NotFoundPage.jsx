import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="empty-state not-found-page">
      <span className="error-code">404</span>
      <h1>Страница не найдена</h1>
      <p>Такого адреса не существует.</p>
      <Link className="primary-button button-link" to="/users">
        На главную
      </Link>
    </section>
  )
}

export default NotFoundPage
