const body = document.body
console.log(body);

const header = document.createElement('div')
header.classList.add("header_sec")
const headcontainer = document.createElement('div')
headcontainer.classList.add("container")
header.appendChild(headcontainer)
body.appendChild(header)

const navbar = document.createElement('div')
navbar.classList.add("navbar")
headcontainer.appendChild(navbar)

const logo = document.createElement('img')
logo.classList.add("logo_img")
navbar.appendChild(logo)

const icon = document.createElement('img')
icon.classList.add("nav_icon")
navbar.appendChild(icon)

const headercontaint = document.createElement('div')
headercontaint.classList.add("heder_containt")
headcontainer.appendChild(headercontaint)

const headerheading = document.createElement('h2')
const headerparag = document.createElement('p')
const headerbutton = document.createElement('button')
headerbutton.classList.add("header_btn")
headercontaint.appendChild(headerheading)
headercontaint.appendChild(headerparag)
headercontaint.appendChild(headerbutton)


logo.src = "img/logo.png"
icon.src = "img/logo-headr.png"
headerheading.innerHTML= "Access team's work at <br> any place"
headerparag.innerHTML = "Meeting notes collaborative <br> document and process are now <br> in one place"
headerbutton.innerHTML = "See Details"
// ===========================================================================================================header section complete
const ourservive = document.createElement('div')
ourservive.classList.add("our_ser")
ourservive.classList.add("container")
body.appendChild(ourservive)

const serviceheading = document.createElement('h2')
const serviceparag = document.createElement('p')
ourservive.appendChild(serviceheading)
ourservive.appendChild(serviceparag)

const cardsec = document.createElement('div')
cardsec.classList.add("card-sec-all")
ourservive.appendChild(cardsec)

const cardone = document.createElement('div')
cardone.classList.add("card")
cardsec.appendChild(cardone)

const cardheadingone = document.createElement('h3')
const cardparagone = document.createElement('p')
cardone.appendChild(cardheadingone)
cardone.appendChild(cardparagone)

const cardtwo = document.createElement('div')
cardtwo.classList.add("card")
cardsec.appendChild(cardtwo)

const cardheadingtwo = document.createElement('h3')
const cardparagtwo = document.createElement('p')
cardtwo.appendChild(cardheadingtwo)
cardtwo.appendChild(cardparagtwo)

const cardthree = document.createElement('div')
cardthree.classList.add("card")
cardsec.appendChild(cardthree)

const cardheadingthree = document.createElement('h3')
const cardparagthree = document.createElement('p')
cardthree.appendChild(cardheadingthree)
cardthree.appendChild(cardparagthree)


cardheadingone.innerHTML = "Authentication"
cardparagone.innerHTML = "There are many variation of <br> passages of Lorem Lipsum available <br> but the majority have suffered <br> alteration in some form"

cardheadingtwo.innerHTML = "work at home"
cardparagtwo.innerHTML = "There are many variation of <br> passages of Lorem Lipsum available <br> but the majority have suffered <br> alteration in some form"

cardheadingthree.innerHTML = "easy access"
cardparagthree.innerHTML = "There are many variation of <br> passages of Lorem Lipsum available <br> but the majority have suffered <br> alteration in some form"

serviceheading.innerHTML = "Our Services"
serviceparag.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.repellendus aperiam <br> dignissimos reprehenderit!"
// =========================================================================================================================================our services section complete

const meeting = document.createElement('div')
meeting.classList.add("visual_meet")
meeting.classList.add("container")
body.appendChild(meeting)

const meetpragsec = document.createElement('div')
meeting.appendChild(meetpragsec)

const meetheading = document.createElement("h2")
const meetparag = document.createElement('p')
const meetbutton = document.createElement('button')
meetbutton.classList.add("meet_btn")

meetpragsec.appendChild(meetheading)
meetpragsec.appendChild(meetparag)
meetpragsec.appendChild(meetbutton)

const meetpragsectwo = document.createElement('div')
meeting.appendChild(meetpragsectwo)

const meetimage = document.createElement('img')
meetimage.classList.add("meet_img")
meetpragsectwo.appendChild(meetimage)

meetheading.innerHTML = "visual meeting"
meetparag.innerHTML = "it is a long established fact that a reader will be distructed by the <br> readable contant of a page when looking at a page layout. The point <br> of using Lorem Lpsum is that it has more-or-less normal distribution of <br> letter as oppsed to using look like readable English <br> <br> Many desktop publishing package and web page editor now use <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime <br> enim at omnis obcaecati dignissimos reprehenderit!"
meetbutton.innerHTML = "why us?"
meetimage.src ="img/meet_image.png"












