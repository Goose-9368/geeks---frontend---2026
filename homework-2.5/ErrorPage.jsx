import {
  Link,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  const isNotFound = isRouteErrorResponse(error) && error.status === 404

  const title = isNotFound
    ? 'Пользователь не найден'
    : 'Не удалось загрузить данные'

  const message = isNotFound
    ? 'Проверьте номер пользователя в адресной строке или вернитесь к списку.'
    : 'Произошла ошибка при обращении к серверу. Попробуйте обновить страницу.'

  return (
    <main className="error-page">
      <div className="error-card">
        <span className="error-code">{isNotFound ? '404' : 'Ошибка'}</span>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link className="primary-button button-link" to="/users">
          К списку пользователей
        </Link>
      </div>
    </main>
  )
}

export default ErrorPage
