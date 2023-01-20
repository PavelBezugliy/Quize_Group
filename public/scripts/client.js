const registration = document.querySelector('#reg_form');

const loginization = document.querySelector('#log_form');

const loginError = document.querySelector('.nameLogin');

if (registration) {
  registration.addEventListener('submit', async (e) => {
    e.preventDefault();

    const {
      name, password, action, method,
    } = e.target;

    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    document.querySelector('message').innerHTML = data.message;
  });
}

if (loginization) {
  loginization.addEventListener('submit', async (e) => {
    e.preventDefault();

    const {
      name, password, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    }
    loginError.innerHTML = data.error;
  });
}
