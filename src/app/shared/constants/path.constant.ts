export const PATH = {
  home: {
    url: '/',
  },
  register: {
    url: 'register',
    title: 'Регистрация',
  },
  login: {
    url: 'login',
    title: 'Вход',
  },
  settings: {
    url: 'settings',
    title: 'Настройки'
  },
  profiles: {
    url: 'profiles',
    title: 'Profiles',
  },
  articles: {
    url: 'article',
    title: 'articles',
    children: {
      newArticles: {
        url: 'article/new',
        title: 'New Articles'
      }
    }
  }
};
