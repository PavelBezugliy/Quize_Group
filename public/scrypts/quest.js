document.querySelector('.theme').addEventListener('click', async (e) => {
  e.preventDefault();
  const href = e.target.className.split(' ')[1];
  const res = await fetch(href, {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/json',
    },
  });
  const data = await res.text();
  console.log(data);
  document.querySelector('.content').style.display = 'none';
  document.querySelector('.content').insertAdjacentHTML('beforebegin', data);
});
