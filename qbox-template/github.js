const repoInfoUrl = 'https://api.github.com/repos/Qbox-project/qbx_core';
const releasesUrl = 'https://api.github.com/repos/Qbox-project/qbx_core/releases';

async function getRepoInfo() {
    try {
        const response = await axios.get(repoInfoUrl);
        const stars = response.data.stargazers_count;
        document.getElementById('repoStars').textContent = `${stars}`;
    } catch (error) {
        console.error('Hata:', error);
        document.getElementById('repoStars').textContent = 'null';
    }
}

async function getLatestRelease() {
    try {
        const response = await axios.get(releasesUrl);
        if (response.data && response.data.length > 0) {
            const latestReleaseVersion = response.data[0].tag_name;
            document.getElementById('latestRelease').textContent = `${latestReleaseVersion}`;
        } else {
            document.getElementById('latestRelease').textContent = 'null';
        }
    } catch (error) {
        console.error('Hata:', error);
        document.getElementById('latestRelease').textContent = 'null';
    }
}

window.onload = () => {
    getRepoInfo();
    getLatestRelease();
};