var body = document.querySelector('main');
navigate();
new WOW().init();
window.addEventListener('hashchange', navigate);

function navigate() {
    var fragment = location.hash.substr(1);
    if (!location.hash) {
        location.hash = 'dashboard';
    }
    if (fragment) {
        getData(`pages/${fragment}.html`, render, fragment);
        setActiveClass(fragment)
    }
}
function render(content, fragment) {
    body.innerHTML = content;
    getScript(fragment)
    spinner(false);
}

function setActiveClass(fragment) {
    var links = document.querySelectorAll('#sidebar-wrapper .list-group-item, #sidebar-icons .list-group-item'),
        pageName;
    Array.from(links).forEach(a => {
        pageName = a.getAttribute('href').substr(1);
        if (pageName == fragment) {
            a.classList.add('active')
        } else {
            a.classList.remove('active');
        }
    })
}

function getData(path, callBack, fragment) {
    // create new ajax request
    var request = new XMLHttpRequest();
    request.onload = () => {
        callBack(request.responseText, fragment);
    }
    request.open('GET', path, true)
    request.send(null)
}

function spinner(condition) {
    var spinner = document.querySelectorAll('.loading');
    spinner.forEach(cur => {
        cur.innerHTML = `
        <i class="fa fa-spinner fa-3x my-2"></i>
        <p>Loading...</p>
        `
        if (condition) cur.classList.add('d-none');
        else cur.classList.remove('d-none')
    })

}

function getScript(fragment) {
    var oldScript = document.getElementById('id');
    if (oldScript) {
        oldScript.parentNode.removeChild(oldScript);
    }
    var script = document.createElement('script');
    script.id = 'id';
    script.src = `js/${fragment}.js`
    document.querySelector('html').appendChild(script);
}