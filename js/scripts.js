// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let cx = 0, cy = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX;
  cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
});

function animateRing() {
  rx += (cx - rx) * 0.12;
  ry += (cy - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor size change on hover (using event delegation)
const interactiveSelector = 'a, button, .rolemodel-card, .video-item, .book-card, .blog-card';
document.addEventListener('mouseenter', (e) => {
  if (e.target.matches(interactiveSelector)) {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursorRing.style.width = '60px';
    cursorRing.style.height = '60px';
  }
}, true);

document.addEventListener('mouseleave', (e) => {
  if (e.target.matches(interactiveSelector)) {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
  }
}, true);


// ===== REUSABLE INTERSECTION OBSERVER =====
function createObserver(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const defaults = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const config = { ...defaults, ...options };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, config);

  elements.forEach(el => observer.observe(el));
}

// ===== SCROLL REVEAL ANIMATIONS =====
// Reveal elements on scroll
createObserver('.reveal', { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Timeline entries reveal
createObserver('.timeline-entry', { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

// ===== BLOG POST LOADING =====
async function loadBlogPosts() {
  const blogList = document.getElementById('blog-list');
  
  // Fetch blog post metadata
  try {
    const response = await fetch('blog/posts.json');
    const posts = await response.json();
    
    blogList.innerHTML = '';
    
    posts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'blog-card reveal';
      article.innerHTML = `
        <div class="blog-card-header">
          <h3 class="blog-title">${post.title}</h3>
          <time class="blog-date">${post.date}</time>
        </div>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="javascript:loadBlogPost('${post.file}')" class="blog-read-more">阅读全文 →</a>
      `;
      blogList.appendChild(article);
    });
    
    // Re-run observer for newly added elements
    createObserver('.blog-card', { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  } catch (error) {
    console.log('Blog posts not yet available. Add posts.json to the blog folder.');
    blogList.innerHTML = '<div class="blog-loading reveal">Blog posts coming soon...</div>';
  }
}

async function loadBlogPost(file) {
  try {
    const response = await fetch(`blog/${file}`);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    
    // Create modal or navigate to post page
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
      <div class="blog-modal-content">
        <button class="blog-modal-close" onclick="this.closest('.blog-modal').remove()">×</button>
        <div class="blog-content">${html}</div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  } catch (error) {
    console.error('Error loading blog post:', error);
  }
}

// Load blog posts when page loads
document.addEventListener('DOMContentLoaded', loadBlogPosts);
