form.onsubmit = function (evt) {
    evt.preventDefault();
    let comment = document.createElement("li");
    list.append(comment);

    comment.textContent = input.value;
    if (priority.classList.contains("is-important")) {
    comment.classList.add("is-important");
      }
    input.value = "";
    }

// создание функции на тег форм 
    form.onsubmit = function (evt) {
      evt.preventDefault();
      let newComment = document.createElement("li");
      list.append(newComment);

      newComment.textContent = input.value;
      if (priority.classList.contains("is-important")) {
      newComment.classList.add("is-important");
      }
      // очистить поле ввода
      input.value = "";
      }
