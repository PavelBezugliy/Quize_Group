document.querySelector('body').addEventListener('submit', async (e) => {
  e.preventDefault();
  // console.log(e.target.dataset.id);
  // console.log(e.target.answer.value);
  const res = await fetch(`/quest/1/${e.target.dataset.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      answer: e.target.answer.value,
    }),
  });
  const data = await res.text();
  document.querySelector('.content').style.display = 'none';
  document.querySelector('.content').insertAdjacentHTML('beforebegin', data);
});
