
// Markdown 渲染 + 目录生成逻辑
function renderMarkdownAndTOC(rawMarkdown) {
// 1. 转换 Markdown 为安全的 HTML
const html = DOMPurify.sanitize(marked.parse(rawMarkdown));

// 2. 插入内容
document.getElementById("content").innerHTML = html;

// 3. 生成目录
generateTOC();
}

// 提取 h2 生成目录
function generateTOC() {
const h2Elements = document.querySelectorAll('#content h2');
const tocContainer = document.querySelector('.chaps');
let tocHTML = '';

h2Elements.forEach((h2, index) => {
    // 为每个 h2 添加锚点 ID
    const id = `section-${index}`;
    h2.id = id;
    
    // 构建目录链接
    tocHTML += `
    <a href="#${id}" 
        onclick="scrollToSection(event, '${id}')">
        ${h2.textContent}
    </a>
    `;
});

tocContainer.innerHTML = tocHTML;
}

// 平滑滚动到章节
function scrollToSection(event, id) {
event.preventDefault();
document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});
}

// 监听 HTMX 内容加载完成事件
document.body.addEventListener('htmx:afterRequest', (e) => {
if (e.detail.requestConfig.path.startsWith('markdown/README.md')) {
    const rawContent = e.detail.xhr.responseText;
    renderMarkdownAndTOC(rawContent);
}
});