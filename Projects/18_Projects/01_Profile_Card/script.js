
let btn = document.getElementById('submit')
let profiles = []
let create_profile_card = function create_profile(user){
    let card = document.createElement('div')
    card.innerHTML=`
    <img src="${user.image}" alt="">
      <p class="name">${user.name}</p>
      <p class="prof">${user.prof}</p>
      <p class="mail">${user.email}</p>
      <p class="bio">${user.bio}</p>
    `
    card.classList.add('profile-card')
    document.getElementById('all-profiles').appendChild(card)
}
// adding dummy data to profiles
for(let i=1;i<=10;i++){
    obj = {
        name : 'Sidhharth',
        email : 'sidhhu@jethana.com',
        prof : 'Student',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjWesSUGnQvLm97Hwqf_Rr8P62E4LJqS5R69bS4dGj4CDXg2Si73BMZv7&s=10',
        bio : 'He is a good student and want to eat soyabeen'
    }
    profiles.push(obj)
    create_profile_card(obj)
}


let missing_value = function value_required(val){
    let p = document.createElement('p')
    p.id = 'missing'
    p.innerHTML = `${val} is required`
    p.classList.add('required')
    document.getElementById('user-form').appendChild(p)
}

// simple validator need to valid more
let is_valid_email = function validate_email(email){
    let at_the_rate = false 
    let dot = false 
    for(let i=0 ; i<email.length;i++){
        if( email[i]=='@'){
            at_the_rate = true
        }
        if(email[i]=='.'){
            dot = true
        }
    }
    return at_the_rate && dot
}

btn.addEventListener('click',()=>{
    if(document.getElementById("missing")){
        let prev_missing = document.getElementById('missing')
        prev_missing.remove()
    }

    let name_inp = document.getElementById('name')
    let email_inp = document.getElementById('email')
    let prof_inp = document.getElementById('prof')
    let image_url_inp = document.getElementById('image') 
    let bio_inp = document.getElementById('bio')

    // Validate Data 
    if(name_inp.value==''){
        missing_value('Name')
        return
    }
    else if(email_inp.value==''){
        missing_value('Email')
        return
    }
    else if(is_valid_email(email_inp.value)==false){
        let p = document.createElement('p')
        p.id = 'missing'
        p.innerHTML = 'Email is invalid'
        p.classList.add('required')
        document.getElementById('user-form').appendChild(p)
        return
    }
    else if(prof_inp.value==''){
        missing_value('Profession')
        return
    }
    else if(image_url_inp.value==''){
        missing_value('Image URL')
        return
    }
    else if(bio_inp.value==''){
        missing_value('Short Bio')
        return
    }

    // Add value to the object of user 
    let user = {}
    user.name = name_inp.value 
    user.email = email_inp.value 
    user.prof = prof_inp.value 
    user.image = image_url_inp.value 
    user.bio = bio_inp.value

    let profile_card = create_profile_card(user)

    name_inp.value =''
    email_inp.value =''
    prof_inp.value = ''
    image_url_inp.value =''
    bio_inp.value =''
})  