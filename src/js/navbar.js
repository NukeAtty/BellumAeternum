// 定义导航栏的HTML内容
const navbarHTML = `
    <div class="navigation-buttons">
        <div class="navigation-button">
            <a href="https://ra2be.com/zh">首页</a>
        </div>
        <div class="navigation-button">
            <a href="../archives.html">档案库</a>
        </div>
        <div class="navigation-button">
            <a href="../blog.html">博客</a>
        </div>
        <div class="navigation-button">
            <a href="../download.html">下载</a>
        </div>
    </div>
    <div class="responsive-navigation">
        <a href="https://ra2be.com/zh"><img src="../src/favicon.svg" alt="logo" width="36px" height="36px"></a>
        <div class="responsive-navigation-buttons">
            <a href="../archives.html">档案库</a>
            <a href="../blog.html">博客</a>
            <a href="../download.html">下载</a>
        </div>
    </div>
`;

// 将导航栏插入到每个页面的<header>标签中
function insertNavbar() {
    // 查找页面中的<header>标签
    const header = document.querySelector('header');

    // 如果<header>标签存在，插入导航栏
    if (header) {
        header.innerHTML = navbarHTML;
    } else {
        console.warn('未找到<header>标签，导航栏未插入。');
    }
}

// 页面加载完成后执行插入操作
window.onload = insertNavbar;