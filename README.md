## Расширение для работы с API
### Введение

Чтобы работать с API часто приходиться менять значения различных параметров. Править ссылку в адресной строке браузера не удобно, поэтому мы создали это расширение.

![](https://github.com/vovapipko/api-supporter/blob/master/img/schema-api.png?raw=true)

### Описание возможностей
Расширение позволяет быстро изменять значения практически всех используемых параметров. Если навести на знак вопроса напротив название параметра в расширении — всплывёт подсказка о его значении.

Работает только для API поиска и его дебага, на проде и QA.

При первом переходе в debug нужно ввести ключ дебага. После ввода он записывается в куки и до их чистки, повторно вводить не требуется. Это нужно, чтобы не хранить ключ в публичном репозитории Github. Также при переходе из debug в search ключ удаляется из ссылки.

### Как установить

1. Установите расширение [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) и влючите его
2. Нажмите сперва на иконку расширение, а после на "Создать новый скрипт"
3. Очистите весь текст, вместо него вставьте код из спойлера ниже
    <details> 
    <summary>Код для вставки</summary>
     
     ###### _master-версия_
     ```js
        // ==UserScript==
        // @name         API's Supporter
        // @version      dynamic
        // @description  helps in working with api's, instruction: https://github.com/vovapipko/api-supporter
        // @match        https://*.diginetica.net/*
        // @match        https://*.anyplatform.ru/*
        // @match        https://*.time.tbank.ru/*
        // @icon         https://github.com/vovapipko/api-supporter/raw/master/img/favicon.ico
        // @require      https://github.com/vovapipko/api-supporter/raw/master/bundle.js
        // @downloadURL  https://github.com/vovapipko/api-supporter/raw/master/bundle.js
        // @updateURL    https://github.com/vovapipko/api-supporter/raw/master/bundle.js
        // @run-at       document-ready
        // @grant        GM_addStyle
        // ==/UserScript==
    ```
    
    ###### _develop-версия_
     ```js
        // ==UserScript==
        // @name         API's Supporter
        // @version      dynamic
        // @description  helps in working with api's, instruction: https://github.com/vovapipko/api-supporter
        // @match        https://*.diginetica.net/*
        // @match        https://*.anyplatform.ru/*
        // @match        https://*.time.tbank.ru/*
        // @icon         https://github.com/vovapipko/api-supporter/raw/master/img/favicon.ico
        // @require      https://github.com/vovapipko/api-supporter/raw/develop/bundle.js
        // @downloadURL  https://github.com/vovapipko/api-supporter/raw/develop/bundle.js
        // @updateURL    https://github.com/vovapipko/api-supporter/raw/develop/bundle.js
        // @run-at       document-ready
        // @grant        GM_addStyle
        // ==/UserScript==
    ```
    
    </details>

4. Сохраните результат, через "Файл → Сохранить" или просто Ctrl+S.  
5. Закройте не нужные более вкладки и откройте API — расширение работает.  


### Баги и пожелания
Баги будут чиниться по мере поступления и важности, пожелания — в зависимости от количества желающих и сложности выполнения.

### Авторы
@Ilya Makukha отвечал за концепцию и дизайн  
@Vladimir Pipko писал весь код  
Задача: Инструмент для работы с API