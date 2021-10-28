const socialMidiaLinks = {
    github: 'Ismaik666',
    youtube: 'UCILDJ8e_ReWCbhFVUFjvLag',
    facebook: 'ismaik.souza.14',
    instagram: 'ismaaaaik',
    twitter: 'pennywi85366853'
    }

    function changeSocialMidiaLinks() {
        for ( let li of socialLinks.children) {
            const social = li.getAttribute('class')

            li.children[0].href = `https://${social}.com/${socialMidiaLinks[social]}`
        }
    }

    changeSocialMidiaLinks()

    function getGitHubData() {
        const url = `https://api.github.com/users/${socialMidiaLinks.github}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            userProfile.src = data.avatar_url
            userName.textContent = data.name
            userLink.href = data.html_url
            userBio.textContent = data.bio
            userLogin.textContent = data.login

        })
    }

    getGitHubData()