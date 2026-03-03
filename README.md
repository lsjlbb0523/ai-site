# AI生意参谋

**帮门店老板自动生成赚钱的营销方案**

一个专为门店老板设计的AI营销工具网站，提供营销方案生成、朋友圈文案生成、节日营销方案等功能。使用纯前端技术开发，无需后端，即开即用。

[查看演示](https://yourname.github.io/ai-business-assistant) | [使用指南](#使用指南) | [部署教程](#部署到免费平台)

---

## 功能特性 ✨

### 1. 营销方案生成 🎯
根据店铺信息自动生成完整的营销方案：
- 输入：店铺类型、城市、客单价、营销目标、预算
- 输出：营销活动方案 + 执行步骤 + 宣传文案 + 短视频脚本 + 预期效果

### 2. 朋友圈文案生成 📱
快速生成吸引人的朋友圈营销文案：
- 输入：产品、优惠、活动
- 输出：长文案版本 + 短文案版本 + 配图建议

### 3. 节日营销方案 🎉
针对节日打造专属营销方案：
- 支持：情人节、五一、国庆、春节、中秋、圣诞、元旦
- 输出：节日营销活动 + 推广渠道 + 宣传文案 + 短视频创意

---

## 项目结构 📁

```
ai-business-assistant/
├── index.html              # 首页
├── marketing-plan.html     # 营销方案生成页
├── wechat-copy.html        # 朋友圈文案生成页
├── festival-plan.html      # 节日营销方案生成页
├── css/
│   └── style.css          # 全局样式
├── js/
│   ├── api.js             # 模拟AI接口
│   └── main.js            # 主要逻辑
└── README.md              # 项目说明
```

---

## 技术栈 🛠️

- **HTML5** - 网页结构
- **CSS3** - 样式设计（Flexbox + Grid）
- **Vanilla JavaScript** - 交互逻辑
- **响应式设计** - 适配手机、平板、电脑
- **无框架** - 无需构建工具，新手友好

---

## 快速开始 🚀

### 方法一：直接双击打开（最简单）

1. 打开 `ai-business-assistant` 文件夹
2. 双击 `index.html` 文件
3. 浏览器自动打开网站 ✅

### 方法二：使用Python启动本地服务器

```bash
cd ai-business-assistant
python -m http.server 8000
```

然后在浏览器打开：http://localhost:8000

### 方法三：使用Node.js工具

```bash
# 安装http-server（如果还没安装）
npm install -g http-server

# 启动服务器
cd ai-business-assistant
http-server -p 8000
```

然后在浏览器打开：http://localhost:8000

---

## 使用指南 📖

### 1. 生成营销方案

1. 访问首页，点击"立即生成营销方案"
2. 填写表单：
   - 店铺类型（奶茶店、餐饮店、理发店等）
   - 城市
   - 客单价（元）
   - 营销目标（拉新/提升复购/提高营业额）
   - 活动预算（元）
3. 点击"生成营销方案"
4. 等待2-3秒，AI生成完整方案
5. 查看并使用生成的内容

**💡 小贴士**：
- 客单价和建议预算供参考：
  - 客单价50-100元 → 预算2000-5000元
  - 客单价100-200元 → 预算5000-10000元
  - 客单价200元以上 → 预算10000元以上

### 2. 生成朋友圈文案

1. 点击导航栏"朋友圈文案"
2. 填写表单：
   - 产品名（例如：珍珠奶茶）
   - 优惠信息（例如：第二杯半价）
   - 活动名称（例如：开业酬宾）
3. 点击"生成朋友圈文案"
4. 等待1-2秒，AI生成文案
5. 可以一键复制文案，直接使用

### 3. 生成节日营销方案

1. 点击导航栏"节日营销方案"
2. 选择节日（情人节、五一、国庆等）
3. 点击"生成节日营销方案"
4. 等待2秒，AI生成节日专属方案
5. 包含活动方案、宣传文案、推广渠道等

---

## 部署到免费平台 ☁️

### 方案一：GitHub Pages（推荐）

**步骤：**

1. **创建GitHub账号**（如果没有）：github.com

2. **创建新仓库**：
   - 点击右上角的 "+" → "New repository"
   - 仓库名：`ai-business-assistant`
   - 选 "Public"（公开）
   - 勾选 "Add a README file"
   - 点击 "Create repository"

3. **上传项目文件**：
   - 进入仓库页面
   - 点击 "Add file" → "Upload files"
   - 拖拽或选择所有文件（index.html, css/, js/, 等）
   - 点击 "Commit changes"

4. **启用GitHub Pages**：
   - 进入 Settings → Pages
   - 在 "Source" 下：
     - Branch: `main`
     - Folder: `/ (root)`
   - 点击 "Save"

5. **等待部署**：
   - 部署需要1-2分钟
   - 刷新页面，看到绿色提示 "Your site is live"
   - 访问地址：`https://yourname.github.io/ai-business-assistant`

**✅ 完成！你的网站上线了！**

### 方案二：Netlify（最简单）

**步骤：**

1. 访问 netlify.com，点击 "Sign up" 注册账号
2. 注册后点击 "Add new site" → "Deploy manually"
3. 拖拽整个 `ai-business-assistant` 文件夹到网页上
4. 等待几秒钟，自动部署完成
5. 获得免费网址：`https://xxx.netlify.app`

**✅ 完成！**

### 方案三：Vercel（高性能）

**步骤：**

1. 安装Vercel CLI：
   ```bash
   npm install -g vercel
   ```

2. 部署项目：
   ```bash
   cd ai-business-assistant
   vercel --prod
   ```

3. 按提示操作：
   - Set up and deploy: `Y`
   - Which scope: 回车
   - Link to existing project: `n`
   - Project name: `ai-business-assistant` 或回车
   - In which directory: `./` 或回车
   - Override settings: `n`

4. 等待部署完成，获得网址

**✅ 完成！**

### 方案四：Cloudflare Pages

**步骤：**

1. 访问 dash.cloudflare.com 登录/注册
2. 点击 "Pages" → "Create a project"
3. 连接你的GitHub账号
4. 选择 `ai-business-assistant` 仓库
5. Build settings:
   - Build command: (留空)
   - Build output directory: (留空)
6. 点击 "Save and Deploy"
7. 等待部署，获得网址

**✅ 完成！**

---

## 自定义配置 ⚙️

### 修改网站标题和描述

编辑每个HTML文件的这部分：

```html
<title>AI生意参谋 - 帮门店老板自动生成赚钱的营销方案</title>
<meta name="description" content="...">
```

### 修改颜色主题

编辑 `css/style.css`，修改这些变量：

```css
/* 主色（蓝色） */
/* 例如导航栏激活状态、按钮等 */
color: #6366f1;  /* 改为其他颜色代码 */

/* 辅助色（紫色） */
/* 例如渐变、悬停效果等 */
color: #8b5cf6;  /* 改为其他颜色代码 */

/* 背景渐变 */
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%);
/* 修改为其他渐变 */
```

颜色工具推荐：[Coolors](https://coolors.co/)

### 添加/修改店铺类型

编辑 `marketing-plan.html`，找到：

```html
<select class="form-select" id="storeType" name="storeType" required>
    <option value="">请选择店铺类型</option>
    <option value="奶茶店">奶茶店</option>
    <option value="餐饮店">餐饮店</option>
    <!-- 添加更多 -->
</select>
```

### 添加真实AI接口（可选）

目前使用的是模拟数据。要接入真实AI：

1. 获取AI API密钥（例如：OpenAI、智谱AI、月之暗面等）

2. 编辑 `js/api.js`，替换模拟函数：

```javascript
// 模拟版本
function generateMarketingPlan(storeType, city, price, goal, budget) {
    // ... 现有代码
}

// 真实API版本
async function generateMarketingPlan(storeType, city, price, goal, budget) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [{
                role: 'user',
                content: `请为${storeType}生成一个${goal}的营销方案，客单价${price}元，预算${budget}元`
            }]
        })
    });

    const data = await response.json();
    return processAIResponse(data);
}
```

3. 注意修改 `main.js` 中的调用方式为 `async/await`

---

## 浏览器兼容性 🌐

支持所有现代浏览器：
- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ 手机浏览器（iOS Safari, Chrome Mobile）

不支持 Internet Explorer（IE）

---

## 常见问题 ❓

### Q: 需要付费吗？
A: 完全免费！所有代码开源，部署到GitHub Pages等平台也免费。

### Q: 需要后端吗？
A: 不需要！纯前端实现，所有功能在浏览器运行。

### Q: 如何接入真实的AI？
A: 需要注册AI服务（如OpenAI），获取API密钥，然后修改 `js/api.js`。注意：会消耗API费用。

### Q: 可以商用吗？
A: 可以！项目基于MIT许可证，可以自由使用、修改、商用。

### Q: 如何修改样式？
A: 编辑 `css/style.css` 文件，所有样式都在那里。

---

## 技术实现细节 🔧

### 前端架构
- **模块化**：HTML、CSS、JavaScript分离
- **组件化**：表单、卡片、按钮等组件复用
- **响应式**：CSS Grid + Flexbox + Media Queries

### 核心逻辑
- **表单验证**：浏览器原生验证 + JavaScript增强
- **模拟API**：使用随机模板 + 参数插值
- **加载状态**：显示/隐藏加载动画
- **结果展示**：平滑滚动到结果区域

### 性能优化
- 无外部依赖，减少网络请求
- 使用CDN引入字体（可选）
- 图片懒加载（未来可添加）

---

## 后续改进建议 💡

### 功能增强
- [ ] 添加历史记录功能（使用LocalStorage）
- [ ] 添加用户系统（Firebase Auth）
- [ ] 添加PDF导出功能（jsPDF）
- [ ] 添加更多营销模板（邮件营销、短信营销）
- [ ] 添加竞争对手分析功能

### UI/UX改进
- [ ] 添加动画效果（Anime.js）
- [ ] 添加图表展示（Chart.js）
- [ ] 添加暗黑/浅色模式切换
- [ ] 添加更多图标（Iconify）
- [ ] 添加多语言支持

### 技术升级
- [ ] 迁移到React/Vue（如果需要更复杂的交互）
- [ ] 添加TypeScript（提升代码质量）
- [ ] 集成真实AI API（如OpenAI）
- [ ] 添加PWA支持（离线使用）
- [ ] 添加数据分析（Google Analytics）

---

## 贡献指南 🤝

欢迎提交Issue和Pull Request！

1. Fork 本仓库
2. 创建 Feature 分支（`git checkout -b feature/AmazingFeature`）
3. 提交更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 开启 Pull Request

---

## 许可证 📄

MIT License - 查看 [LICENSE](LICENSE) 文件了解更多

你可以：
- ✅ 自由使用
- ✅ 修改代码
- ✅ 商用
- ✅ 分发

---

## 作者 👨‍💻

**AI生意参谋团队**

欢迎联系：
- 📧 Email: your-email@example.com
- 🌐 网站: https://yourname.github.io/ai-business-assistant
- 💬 微信: YourWeChatID（如需交流）

---

## 致谢 🙏

- 感谢开源社区提供的优秀工具
- 感谢所有贡献者和使用者
- 感谢GitHub、Netlify等免费平台

---

## 其他资源 📚

- 📖 [营销知识库](https://example.com/marketing-guide)
- 🎥 [视频教程](https://example.com/tutorial)
- 💬 [用户社区](https://example.com/community)
- 📊 [成功案例](https://example.com/cases)

---

**祝您的生意蒸蒸日上！🎉**

---

<p align="center">
  Made with ❤️ by AI生意参谋
</p>
