  const shareBtn = document.getElementsByClassName('btn')[0];
  const shareBox = document.getElementsByClassName('box')[0];

  shareBtn.addEventListener('click', () => {
    shareBox.classList.toggle('active');
  });

