import { ConfigProvider } from 'antd'
import UserList from './components/UserList.jsx'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6657e8',
          colorSuccess: '#18a66a',
          borderRadius: 16,
          fontFamily: 'Inter, Arial, sans-serif',
        },
      }}
    >
      <main className="app">
        <UserList />
      </main>
    </ConfigProvider>
  )
}

export default App
