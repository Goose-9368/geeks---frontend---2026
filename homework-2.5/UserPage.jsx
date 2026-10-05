import { Link, useLoaderData } from 'react-router-dom'

function UserPage() {
  const user = useLoaderData()

  return (
    <section className="page-section profile-page">
      <Link className="back-link" to="/users">
        <span aria-hidden="true">←</span> Назад к списку
      </Link>

      <article className="profile-card">
        <div className="profile-heading">
          <div className="profile-avatar" aria-hidden="true">
            {user.name.charAt(0)}
          </div>
          <div>
            <p className="eyebrow">Профиль пользователя</p>
            <h1>{user.name}</h1>
            <p className="profile-username">@{user.username}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Email</span>
            <a href={`mailto:${user.email}`}>{user.email.toLowerCase()}</a>
          </div>

          <div className="detail-item">
            <span className="detail-label">Телефон</span>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </div>

          <div className="detail-item">
            <span className="detail-label">Город</span>
            <strong>{user.address.city}</strong>
          </div>

          <div className="detail-item">
            <span className="detail-label">Компания</span>
            <strong>{user.company.name}</strong>
          </div>
        </div>
      </article>
    </section>
  )
}

export default UserPage
