const errorMessages = {
      userAlreadyExist: 'Пользователь по указанным данным уже существует',
      userNotExist: 'Пользователь по указанным данным не существует',
      passwordIsInvalid: 'Пароль должен содержать как минимум одну большую букву',
      passwordsDoesntMatch: 'Указанные вами пароли не совпадают',
      wrongCredentials: 'Нерверный e-mail или пароль',
} 

const successMessages = {
      fileUploaded: {
            title: 'Файл успешно отправлен на Анализ. Ваш запрос обрабатывается',
            action: 'Готово'
      },
      nameIsChanged: 'Поле "Имя" успешно изменено'
}

export {
      errorMessages,
      successMessages
}