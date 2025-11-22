document.addEventListener('DOMContentLoaded', function() {
            const nameElement = document.querySelector('#name');
            const usernameElement = document.querySelector('#username');
            const avatarElement = document.querySelector('#avatar');
            const reposElement = document.querySelector('#repos');
            const followersElement = document.querySelector('#followers');
            const followingElement = document.querySelector('#following');
            const linkElement = document.querySelector('#link');

            const githubUsername = 'RafaelMendes244'; 
            const endpoint = `https://api.github.com/users/${githubUsername}`;

            // Função assíncrona para buscar os dados
            async function getGithubProfile() {
                try {
                    const response = await fetch(endpoint);
                    
                    // Verifica se a resposta foi bem sucedida
                    if (!response.ok) {
                        throw new Error(`Erro na requisição: ${response.status}`);
                    }

                    const data = await response.json();

                    // Preenchendo os dados no HTML
                    nameElement.innerText = data.name || data.login;
                    usernameElement.innerText = `@${data.login}`;
                    avatarElement.src = data.avatar_url;
                    reposElement.innerText = data.public_repos;
                    followersElement.innerText = data.followers;
                    followingElement.innerText = data.following;
                    linkElement.href = data.html_url;

                } catch (error) {
                    console.error('Ocorreu um erro ao buscar os dados:', error);
                    nameElement.innerText = "Erro ao carregar";
                    alert("Não foi possível carregar os dados do GitHub. Verifique o console.");
                }
            }

            // Chamada da função
            getGithubProfile();
        });