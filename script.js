
// Image preview
const input = () => document.getElementById('photo-input');
const preview = () => document.getElementById('preview');
function onPick(){
  input().click();
}
function onFile(e){
  const f = e.target.files?.[0];
  if(!f) return;
  const reader = new FileReader();
  reader.onload = ev => {
    preview().innerHTML = `<img src="${ev.target.result}" style="max-width:100%;max-height:100%;border-radius:12px" alt="Uploaded photo">`;
  };
  reader.readAsDataURL(f);
}

// Modal
const modal = () => document.getElementById('guide-modal');
function openModal(){
  modal().style.display='flex';
}
function closeModal(){
  modal().style.display='none';
}

// Contact reveal
function revealEmail(){
  const pill = document.getElementById('contact-pill');
  const email = document.getElementById('hidden-email');
  email.textContent = "dampriterelay@gmail.com";
  email.style.display='block';
  pill.style.display='none';
}

// Fake checkout click
function fakeCheckout(){
  alert("This is a demo. In production, route to email/post flow. Price: £0.99");
}
