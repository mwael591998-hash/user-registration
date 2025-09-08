
function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c=='x'? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

function createLinks(count){
  fetch('users.json')
    .then(res => res.json())
    .then(data => {
      for(let i=0;i<count;i++){
        const id = createUUID();
        data.users.push({id:id, fullName:"", jobTitle:"", email:"", password:"", phone1:"", phone2:"", facebook:"", instagram:"", linkedin:"", whatsapp:"", tiktok:"", photoUrl:"", filled:false});
      }
      const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'users.json';
      a.click();
      alert('تم إنشاء الروابط! قم برفع ملف users.json المحدث على GitHub.');
    });
}
