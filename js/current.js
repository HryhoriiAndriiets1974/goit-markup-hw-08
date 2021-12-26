(() => {
<<<<<<< HEAD
  document
    .querySelector('.js-speaker-form')
    .addEventListener('submit', e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );

      e.currentTarget.reset();
    });
})();
=======
    document
      .querySelector('.js-speaker-form')
      .addEventListener('submit', e => {
        e.preventDefault();

        new FormData(e.currentTarget).forEach((value, name) =>
          console.log(`${name}: ${value}`),
        );

        e.currentTarget.reset();
      });
  })();
>>>>>>> 18b0ce60274d67e4bb51f063e6a8b9126b64fdb5
