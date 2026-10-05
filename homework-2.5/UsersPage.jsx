import { Link, useLoaderData, useSearchParams } from 'react-router-dom'

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function UsersPage() {
  const users = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const sort = searchParams.get('sort') ?? 'asc'

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(query.trim().toLowerCase()),
    )
    .sort((firstUser, secondUser) => {
      const comparison = firstUser.name.localeCompare(secondUser.name)
      return sort === 'desc' ? -comparison : comparison
    })

  function updateSearchParam(key, value) {
    setSearchParams(
      (currentParams) => {
        const nextParams = new URLSearchParams(currentParams)

        if (!value || (key === 'sort' && value === 'asc')) {
          nextParams.delete(key)
        } else {
          nextParams.set(key, value)
        }

        return nextParams
      },
      { replace: true },
    )
  }

  function handleSearch(event) {
    updateSearchParam('q', event.target.value)
  }

  function handleSort(event) {
    updateSearchParam('sort', event.target.value)
  }

  function clearSearch() {
    updateSearchParam('q', '')
  }

  return (
    <section className="page-section">
      <div className="hero-row">
        <div>
          <p className="eyebrow">Наша команда</p>
          <h1>Пользователи</h1>
          <p className="page-description">
            Данные загружены до отрисовки страницы с помощью route loader.
          </p>
        </div>

        <div className="users-count" aria-label={`${filteredUsers.length} пользователей`}>
          <strong>{filteredUsers.length}</strong>
          <span>из {users.length}</span>
        </div>
      </div>

      <div className="controls-card">
        <label className="search-field">
          <span className="visually-hidden">Поиск пользователя по имени</span>
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            placeholder="Найти по имени..."
          />
          {query && (
            <button className="clear-button" type="button" onClick={clearSearch}>
              Очистить
            </button>
          )}
        </label>

        <label className="sort-field">
          <span>Сортировка</span>
          <select value={sort} onChange={handleSort}>
            <option value="asc">А → Я</option>
            <option value="desc">Я → А</option>
          </select>
        </label>
      </div>

      {filteredUsers.length > 0 ? (
        <div className="users-grid">
          {filteredUsers.map((user) => (
            <article className="user-card" key={user.id}>
              <div className="avatar" aria-hidden="true">
                {getInitials(user.name)}
              </div>

              <div className="user-card-content">
                <Link className="user-name" to={`/users/${user.id}`}>
                  {user.name}
                </Link>
                <a className="user-email" href={`mailto:${user.email}`}>
                  {user.email.toLowerCase()}
                </a>
                <span className="user-city">{user.address.city}</span>
              </div>

              <Link
                className="details-link"
                to={`/users/${user.id}`}
                aria-label={`Открыть профиль ${user.name}`}
              >
                Подробнее <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">
            ?
          </span>
          <h2>Ничего не найдено</h2>
          <p>
            Пользователя с именем «{query}» нет. Попробуйте изменить запрос.
          </p>
          <button className="primary-button" type="button" onClick={clearSearch}>
            Сбросить поиск
          </button>
        </div>
      )}
    </section>
  )
}

export default UsersPage
