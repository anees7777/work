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
ourservive.setAttribute("data-aos","fade-up")
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
meeting.setAttribute("data-aos","fade-up")

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

// =======================================================================================================================================meeting sec complete
const ourteam = document.createElement('div')
ourteam.classList.add("our_team")
ourteam.setAttribute("data-aos","fade-up")
ourteam.classList.add("container")
body.appendChild(ourteam)

const teamheading = document.createElement('h2')
const teamparag = document.createElement('p')
ourteam.appendChild(teamheading)
ourteam.appendChild(teamparag)

const ourcards = document.createElement('div')
ourcards.classList.add("our_card_all")

ourteam.appendChild(ourcards)

const teamcardone = document.createElement('div')
teamcardone.classList.add("team_card")
ourcards.appendChild(teamcardone)
const imgdiv = document.createElement('div')
teamcardone.appendChild(imgdiv)

const ourimage = document.createElement('img')
ourimage.classList.add("our_card_img")

const textcontant = document.createElement('div')
teamcardone.appendChild(textcontant)

const ourcardheading = document.createElement('h3')
const ourcardheadingsec = document.createElement('h4')
const ourcardparag = document.createElement('p')
const ouricon = document.createElement('div')
ouricon.classList.add("circle")

imgdiv.appendChild(ourimage)
textcontant.appendChild(ourcardheading)
textcontant.appendChild(ourcardheadingsec)
textcontant.appendChild(ourcardparag)
textcontant.appendChild(ouricon)


const teamcardtwo = document.createElement('div')
teamcardtwo.classList.add("team_card")
ourcards.appendChild(teamcardtwo)
const imgdivtwo = document.createElement('div')
teamcardtwo.appendChild(imgdivtwo)

const ourimagetwo = document.createElement('img')
ourimagetwo.classList.add("our_card_img")

const textcontanttwo = document.createElement('div')
teamcardtwo.appendChild(textcontanttwo)

const ourcardheadingtwo = document.createElement('h3')
const ourcardheadingsectwo = document.createElement('h4')
const ourcardparagtwo = document.createElement('p')
const ouricontwo = document.createElement('div')
ouricontwo.classList.add("circle")

imgdivtwo.appendChild(ourimagetwo)
textcontanttwo.appendChild(ourcardheadingtwo)
textcontanttwo.appendChild(ourcardheadingsectwo)
textcontanttwo.appendChild(ourcardparagtwo)
textcontanttwo.appendChild(ouricontwo)

const teamcardthree = document.createElement('div')
teamcardthree.classList.add("team_card")


ourcards.appendChild(teamcardthree)
const imgdivthree = document.createElement('div')
teamcardthree.appendChild(imgdivthree)

const ourimagethree = document.createElement('img')
ourimagethree.classList.add("our_card_img")

const textcontantthree = document.createElement('div')
teamcardthree.appendChild(textcontantthree)

const ourcardheadingthree = document.createElement('h3')
const ourcardheadingsecthree = document.createElement('h4')
const ourcardparagthree = document.createElement('p')
const ouriconthree = document.createElement('div')
ouriconthree.classList.add("circle")

imgdivthree.appendChild(ourimagethree)
textcontantthree.appendChild(ourcardheadingthree)
textcontantthree.appendChild(ourcardheadingsecthree)
textcontantthree.appendChild(ourcardparagthree)
textcontantthree.appendChild(ouriconthree)

const teamcardfour = document.createElement('div')
teamcardfour.classList.add("team_card")
ourcards.appendChild(teamcardfour)
const imgdivfour = document.createElement('div')
teamcardfour.appendChild(imgdivfour)

const ourimagefour = document.createElement('img')
ourimagefour.classList.add("our_card_img")

const textcontantfour = document.createElement('div')
teamcardfour.appendChild(textcontantfour)

const ourcardheadingfour = document.createElement('h3')
const ourcardheadingsecfour = document.createElement('h4')
const ourcardparagfour = document.createElement('p')
const ouriconfour = document.createElement('div')
ouriconfour.classList.add("circle")

imgdivfour.appendChild(ourimagefour)
textcontantfour.appendChild(ourcardheadingfour)
textcontantfour.appendChild(ourcardheadingsecfour)
textcontantfour.appendChild(ourcardparagfour)
textcontantfour.appendChild(ouriconfour)

const seemorebutton = document.createElement('button')
seemorebutton.classList.add("see_more")
ourteam.appendChild(seemorebutton)

seemorebutton.innerHTML = "see the full team"
ourcardheading.innerHTML = "samanth martin"
ourcardheadingsec.innerHTML = "ceo"
ourcardparag.innerHTML = "this journey that has lasted for over 3 years is <br> slowly coming to an end so i would like to say <br> huge thank to my entire team"

ourcardheadingtwo.innerHTML = "eric johnson"
ourcardheadingsectwo.innerHTML = "md"
ourcardparagtwo.innerHTML = "this journey that has lasted for over 3 years is <br> slowly coming to an end so i would like to say <br> huge thank to my entire team"

ourcardheadingthree.innerHTML = "haily peterson"
ourcardheadingsecthree.innerHTML = "cfo"
ourcardparagthree.innerHTML = "this journey that has lasted for over 3 years is <br> slowly coming to an end so i would like to say <br> huge thank to my entire team"

ourcardheadingfour.innerHTML = "denish clarke"
ourcardheadingsecfour.innerHTML = "cto"
ourcardparagfour.innerHTML = "this journey that has lasted for over 3 years is <br> slowly coming to an end so i would like to say <br> huge thank to my entire team"

teamheading.innerHTML = "our team"
teamparag.innerHTML= "XYZ is simply lorem ipsom dolor sit simply <br> dummy text"
// =========================================================================================================================================================our team section complete
const feature = document.createElement('div')
feature.classList.add("featured")
feature.setAttribute("data-aos","fade-up")
feature.classList.add("container")
body.appendChild(feature)

const featureheading = document.createElement('h2')
feature.appendChild(featureheading)

const iconall = document.createElement('div')
iconall.classList.add("icon_all")
feature.appendChild(iconall)

const slider = document.createElement('div')
slider.classList.add("slider")
feature.appendChild(slider)

const slidertwo = document.createElement('div')
slidertwo.classList.add("slidertwo")
feature.appendChild(slidertwo)

const sliderparag = document.createElement('p')
slider.appendChild(sliderparag)

const sliderheading = document.createElement('h3')
sliderheading.classList.add("slid_heading")
slidertwo.appendChild(sliderheading)

const icon_first = document.createElement('img')
icon_first.classList.add("icon_first")
iconall.appendChild(icon_first)

const icon_two = document.createElement('img')
icon_two.classList.add("icon_two")
iconall.appendChild(icon_two)

const icon_three = document.createElement('img')
icon_three.classList.add("icon_three")
iconall.appendChild(icon_three)

const icon_four = document.createElement('img')
icon_four.classList.add("icon_four")
iconall.appendChild(icon_four)

const icon_five = document.createElement('img')
icon_five.classList.add("icon_five")
iconall.appendChild(icon_five)

const icon_six = document.createElement('img')
icon_six.classList.add("icon_six")
iconall.appendChild(icon_six)

const icon_seven = document.createElement('img')
icon_seven.classList.add("icon_seven")
iconall.appendChild(icon_seven)

const icon_eight = document.createElement('img')
icon_eight.classList.add("icon_eight")
iconall.appendChild(icon_eight)


icon_first.src = "img/fea-icon1.png"
icon_two.src = "img/fea-icon2.png"
icon_three.src = "img/fea-icon3.png"
icon_four.src = "img/fea-icon4.png"
icon_five.src = "img/fea-icon5.png"
icon_six.src = "img/fea-icon6.png"
icon_seven.src = "img/fea-icon7.png"
icon_eight.src = "img/fea-icon8.png"
sliderheading.innerHTML = "Channel 9"
sliderparag.innerHTML = "XYZ was extreamly easy for us to use from the very start. Night of seas fruitful images <br> that man of beast heaven green own it after and shell. Likeness shall which creepath."
featureheading.innerHTML = "featured in press"
// =======================================================================================================================feature section complete
const footer = document.createElement('div')
footer.classList.add("footer")
footer.setAttribute("data-aos","fade-up")
const footercontainer = document.createElement('div')
footercontainer.classList.add("container")
footer.appendChild(footercontainer)

body.appendChild(footer)
const footerform = document.createElement('div')
footerform.classList.add("footer_form")
footercontainer.appendChild(footerform)

const foot_detail = document.createElement('div')
foot_detail.classList.add("foot_detail")
footercontainer.appendChild(foot_detail)
const footer_last = document.createElement('p')
footercontainer.appendChild(footer_last)


const foot_image = document.createElement('div')
const foot_contain = document.createElement('div')
foot_contain.classList.add("foot_list")
foot_detail.appendChild(foot_image)
foot_detail.appendChild(foot_contain)


const formheading = document.createElement('h3')
footerform.appendChild(formheading)

const forminput = document.createElement('input')
footerform.appendChild(forminput)

const formbutton = document.createElement('button')
formbutton.classList.add("form_button")
footerform.appendChild(formbutton)

const foot_logo = document.createElement('img')
foot_logo.classList.add("foot_logo")
foot_image.appendChild(foot_logo)

const foot_ul = document.createElement('ul')
foot_ul.classList.add("fot_ul_one")
foot_contain.appendChild(foot_ul)
const foot_li_one = document.createElement('li')
foot_li_one.classList.add("list_head")
const foot_li_two = document.createElement('li')
const foot_li_three = document.createElement('li')

const foot_ul_two = document.createElement('ul')
foot_ul_two.classList.add("fot_ul_two")
foot_contain.appendChild(foot_ul_two)
const foot_li_four = document.createElement('li')
foot_li_four.classList.add("list_head")
const foot_li_five = document.createElement('li')
const foot_li_six = document.createElement('li')
const foot_li_seven = document.createElement('li')
const foot_li_eight = document.createElement('li')
const foot_li_nine = document.createElement('li')

const foot_ul_three = document.createElement('ul')
foot_ul_three.classList.add("fot_ul_three")
foot_contain.appendChild(foot_ul_three)
const foot_li_ten = document.createElement('li')
foot_li_ten.classList.add("list_head")
const foot_li_ele = document.createElement('li')
const foot_li_twe = document.createElement('li')
const foot_li_thir = document.createElement('li')
const foot_li_fourtin = document.createElement('li')
const foot_li_fift = document.createElement('li')

const foot_ul_four = document.createElement('ul')
foot_ul_four.classList.add("fot_ul_four")
foot_contain.appendChild(foot_ul_four)
const foot_li_sixt = document.createElement('li')
foot_li_sixt.classList.add("list_head")
const foot_li_sevent = document.createElement('li')



foot_ul.appendChild(foot_li_one)
foot_ul.appendChild(foot_li_two)
foot_ul.appendChild(foot_li_three)

foot_ul_two.appendChild(foot_li_four)
foot_ul_two.appendChild(foot_li_five)
foot_ul_two.appendChild(foot_li_six)
foot_ul_two.appendChild(foot_li_seven)
foot_ul_two.appendChild(foot_li_eight)
foot_ul_two.appendChild(foot_li_nine)

foot_ul_three.appendChild(foot_li_ten)
foot_ul_three.appendChild(foot_li_ele)
foot_ul_three.appendChild(foot_li_twe)
foot_ul_three.appendChild(foot_li_thir)
foot_ul_three.appendChild(foot_li_fourtin)
foot_ul_three.appendChild(foot_li_fift)

foot_ul_four.appendChild(foot_li_sixt)
foot_ul_four.appendChild(foot_li_sevent)



formheading.innerHTML = "Get update about XYZ"
forminput.setAttribute("placeholder", "Enter your email")
formbutton.innerHTML = "subscribe"
foot_logo.src = "img/logo_footer.png"

foot_li_one.innerHTML = "address"
foot_li_two.innerHTML = "XYZ <br> south africa <br> 5238"
foot_li_three.innerHTML = "+9898989898"

foot_li_four.innerHTML = "features"
foot_li_five.innerHTML = "token"
foot_li_six.innerHTML = "roadmap"
foot_li_seven.innerHTML = "team"
foot_li_eight.innerHTML = "whitepaper"
foot_li_nine.innerHTML = "faq"

foot_li_ten.innerHTML = "company"
foot_li_ele.innerHTML = "about"
foot_li_twe.innerHTML = "customers"
foot_li_thir.innerHTML = "press"
foot_li_fourtin.innerHTML = "privacy policy"
foot_li_fift.innerHTML = "terms & condition"

foot_li_sixt.innerHTML = " supports@xyz.com"
foot_li_sevent.innerHTML = "supports@xyz.com"
footer_last.innerHTML = "&copy; XYZ 2018.All rights reserved. Made in South Africa"







