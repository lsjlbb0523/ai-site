/**
 * AI生意参谋 - 主要逻辑文件
 * 通用函数和工具
 */

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initActiveNav();
    initFormHandlers();
});

// 设置导航栏激活状态
function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 根据当前页面设置激活状态
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === 'marketing-plan.html' && href === 'marketing-plan.html') ||
            (currentPage === 'wechat-copy.html' && href === 'wechat-copy.html') ||
            (currentPage === 'festival-plan.html' && href === 'festival-plan.html')
        ) {
            link.classList.add('active');
        }
    });
}

// 初始化表单处理
function initFormHandlers() {
    // 营销方案表单
    const marketingForm = document.getElementById('marketing-form');
    if (marketingForm) {
        marketingForm.addEventListener('submit', handleMarketingSubmit);
    }

    // 朋友圈文案表单
    const wechatForm = document.getElementById('wechat-form');
    if (wechatForm) {
        wechatForm.addEventListener('submit', handleWechatSubmit);
    }

    // 节日营销表单
    const festivalForm = document.getElementById('festival-form');
    if (festivalForm) {
        festivalForm.addEventListener('submit', handleFestivalSubmit);
    }

    // 文案复制按钮
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', handleCopyText);
    });
}

// 处理营销方案表单提交
function handleMarketingSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const storeType = formData.get('storeType');
    const city = formData.get('city');
    const price = parseInt(formData.get('price'));
    const goal = formData.get('goal');
    const budget = parseInt(formData.get('budget'));

    // 验证表单
    if (!storeType || !city || !price || !goal || !budget) {
        alert('请填写所有必填项！');
        return;
    }

    // 显示加载动画
    showLoading();

    // 模拟API调用延迟
    setTimeout(() => {
        try {
            const result = generateMarketingPlan(storeType, city, price, goal, budget);
            displayMarketingResult(result);
        } catch (error) {
            console.error('生成营销方案失败:', error);
            alert('抱歉,生成失败,请稍后重试！');
        } finally {
            hideLoading();
        }
    }, 2000);
}

// 处理朋友圈文案表单提交
function handleWechatSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = formData.get('product');
    const discount = formData.get('discount');
    const activity = formData.get('activity');

    // 验证表单
    if (!product || !discount || !activity) {
        alert('请填写所有必填项！');
        return;
    }

    // 显示加载动画
    showLoading();

    setTimeout(() => {
        try {
            const result = generateWechatCopy(product, discount, activity);
            displayWechatResult(result);
        } catch (error) {
            console.error('生成文案失败:', error);
            alert('抱歉,生成失败,请稍后重试！');
        } finally {
            hideLoading();
        }
    }, 1500);
}

// 处理节日营销表单提交
function handleFestivalSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const festival = formData.get('festival');

    if (!festival) {
        alert('请选择节日！');
        return;
    }

    showLoading();

    setTimeout(() => {
        try {
            const result = generateFestivalPlan(festival);
            displayFestivalResult(result);
        } catch (error) {
            console.error('生成节日方案失败:', error);
            alert('抱歉,生成失败,请稍后重试！');
        } finally {
            hideLoading();
        }
    }, 1800);
}

// 显示营销方案结果
function displayMarketingResult(result) {
    const resultContainer = document.getElementById('result-container');

    // 填写营销活动
    document.getElementById('activity-name').textContent = result.activity;
    document.getElementById('activity-desc').textContent = result.description;

    // 填写执行步骤
    const stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = '';
    result.steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });

    // 填写宣传文案
    document.getElementById('copy-content').textContent = result.copy;

    // 填写短视频脚本
    document.getElementById('video-script').textContent = result.videoScript;

    // 填写预期效果
    document.getElementById('expected-result').textContent = result.expected;

    // 显示结果容器
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 显示朋友圈文案结果
function displayWechatResult(result) {
    const resultContainer = document.getElementById('result-container');

    document.getElementById('long-copy').textContent = result.longCopy;
    document.getElementById('short-copy').textContent = result.shortCopy;
    document.getElementById('image-suggestion').textContent = result.imageSuggestion;

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 显示节日营销方案结果
function displayFestivalResult(result) {
    const resultContainer = document.getElementById('result-container');

    document.getElementById('festival-activity').textContent = result.festivalActivity;
    document.getElementById('activity-strategy').textContent = result.activityStrategy;

    // 关键要点
    const keyPointsList = document.getElementById('key-points-list');
    keyPointsList.innerHTML = '';
    result.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        keyPointsList.appendChild(li);
    });

    // 推广渠道
    const promotionChannelsList = document.getElementById('promotion-channels-list');
    promotionChannelsList.innerHTML = '';
    result.promotionChannels.forEach(channel => {
        const li = document.createElement('li');
        li.textContent = channel;
        promotionChannelsList.appendChild(li);
    });

    document.getElementById('festival-copy').textContent = result.copywriting;
    document.getElementById('festival-video').textContent = result.videoCreative;
    document.getElementById('promotion-timing').textContent = result.promotionSuggestion;

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 处理复制文本
function handleCopyText(e) {
    const copyButton = e.target;
    const targetId = copyButton.getAttribute('data-target');
    const textElement = document.getElementById(targetId);

    if (!textElement) return;

    const text = textElement.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyButton.textContent;
        copyButton.textContent = '✅ 已复制';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
        alert('复制失败,请手动复制');
    });
}

// 显示加载动画
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.add('show');
    }
}

// 隐藏加载动画
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.remove('show');
    }
}

// 工具函数 - 防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数 - 节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
