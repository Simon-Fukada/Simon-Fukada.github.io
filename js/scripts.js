// Fixed Navigation
const navigation = document.querySelector('.main-navigation'),
      siteHeader = document.querySelector('.site-header')


            window.onscroll = () => {
                if(!document.getElementById('mobile-nav').classList.contains('mobile-active')){
                    if(window.scrollY > (siteHeader.clientHeight-100)){
                        navigation.classList.add('main-navigation-onscroll')
                    } else {
                        navigation.classList.remove('main-navigation-onscroll')
                    }
                }
            }






document.addEventListener('DOMContentLoaded', function(){
    renderTemplate(0)
    const scroll = new SmoothScroll('a[href*="#"',{
        speed: 1000,
        updateURL: false
    })
})

document.getElementById('web_app').addEventListener("click", function(){
    renderTemplate(0)
})

document.getElementById('youtube').addEventListener("click", function(){
    renderTemplate(1)
})

document.getElementById('data_app').addEventListener("click", function(){
    renderTemplate(2)
})
document.getElementById('github').addEventListener("click", function(){
    renderTemplate(3)
})

renderTemplate = (index) => {
    projectParent = document.getElementById('projects')
    while(projectParent.firstChild)
    {
        projectParent.removeChild(projectParent.firstChild)
    }
    fetch('data.json')
    .then(data => data.json())
    .then(result => {
        projectsTemplate(result.Projects, index)
    })
}

projectsTemplate = (project, projectIndex) => {
    const projectList = document.querySelector('#projects')

    const projectHTML = document.createElement('div')
    projectHTML.innerHTML = `
    <div class="list-group-item list-group-item-action active text-center heading" style="background-color: ${project[projectIndex].bgcolour}; border: none;">
        <a href="${project[projectIndex].url}" target="_blank" style="color: black;">${project[projectIndex].name}</a>
    </div>
    <div class="list-group-item list-group-item-action d-flex conference-wrapper">
        <div class="image1">
            <a href="${project[projectIndex].url}" target="_blank">
                <img src="${project[projectIndex].img}" class="img-fluid">
            </a>  
        </div>
    </div>
    `

    const descriptionList = document.createElement('div')
    descriptionList.classList.add('list-group-item', 'list-group-item-action', 'conference-wrapper')
    
    project[projectIndex].description.forEach(element => {
        const descriptionElement = document.createElement('p')
        descriptionElement.classList.add('text-center')
        
        descriptionElement.innerHTML = `${element}`

        descriptionList.appendChild(descriptionElement)    
    });
    

    projectHTML.appendChild(descriptionList)
    projectList.appendChild(projectHTML)
} 

// Toggle mobile menu
document.getElementById('mobileIcon').addEventListener("click", function(){
    if(!document.getElementById('mobile-nav').classList.contains('d-none')){
        document.getElementById('mobile-nav').classList.add('d-none')
        //document.getElementById('mobile-nav').classList.remove('mobile-active', 'main-navigation-onscroll')
        return
    }
    document.getElementById('mobile-nav').classList.remove('d-none')
    document.getElementById('mobile-nav').classList.add('mobile-active', 'main-navigation-onscroll','pt-5')
})