import React, { Component } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

import {PageProvider, PageConsumer} from './contexts/PageContext'
import {UserProvider} from './contexts/UserContext';

class App extends Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => value.page === 'login' ? (
              <LoginPage />
            ) : value.page === 'todo' ? (
              <TodoPage />
            ) : null}
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    )
  }
}

export default App;