document.querySelector('.theme').addEventListener('click', async (e) => {
  e.preventDefault();
  document.querySelectorAll('.btn-outline-success').forEach((el) => el.delete);
  const href = e.target.className.split(' ')[1];
  console.log(e.target.className);
  const res = await fetch(href, {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/json',
    },
  });
  const data = await res.text();
  document.querySelector('.content').style.display = 'none';
  document.querySelector('.content').insertAdjacentHTML('beforebegin', data);
});
