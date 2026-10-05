const USERS_API = 'https://jsonplaceholder.typicode.com/users'

export async function usersLoader({ request }) {
  const response = await fetch(USERS_API, {
    signal: request.signal,
  })

  if (!response.ok) {
    throw new Response('Не удалось загрузить список пользователей', {
      status: response.status,
      statusText: 'Data loading error',
    })
  }

  return response.json()
}

export async function userLoader({ params, request }) {
  const response = await fetch(`${USERS_API}/${params.id}`, {
    signal: request.signal,
  })

  if (!response.ok) {
    throw new Response('Пользователь не найден', {
      status: 404,
      statusText: 'Not Found',
    })
  }

  const user = await response.json()

  // Дополнительная защита на случай, если API вернёт пустой объект.
  if (!user.id) {
    throw new Response('Пользователь не найден', {
      status: 404,
      statusText: 'Not Found',
    })
  }

  return user
}
