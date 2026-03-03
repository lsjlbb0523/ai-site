/**
 * AI生意参谋 - 模拟API接口
 * 实际使用时可以替换为真实的AI API调用
 */

// 营销方案生成函数
function generateMarketingPlan(storeType, city, price, goal, budget) {
    const goals = {
        '拉新': '吸引新客户',
        '提升复购': '提升老客户复购率',
        '提高营业额': '提高总体营业额'
    };

    const goalsEN = {
        '拉新': 'newCustomer',
        '提升复购': 'repeatPurchase',
        '提高营业额': 'increaseRevenue'
    };

    const goalKey = goalsEN[goal];

    // 营销方案模板库
    const marketingPlans = {
        newCustomer: [
            {
                name: '首单立减活动',
                description: '新用户首次消费享受立减优惠',
                steps: [
                    '设置新用户专享优惠券，满{{price}}减{{discount}}',
                    '在门店显眼位置放置活动海报',
                    '培训员工主动向新客户介绍活动',
                    '在社交媒体投放广告扩大影响',
                    '收集新用户信息建立客户档案'
                ],
                copy: '🎉{{storeType}}新人专享福利！首次到店即享立减{{discount}}元，{{product}}原价{{price}}元，现在只需{{discountedPrice}}元！地址：{{city}} {{address}}，快来体验吧！',
                videoScript: '开头：展示店铺环境和特色产品\n中段：介绍首单立减活动\n结尾：引导到店消费\n时长：15-30秒',
                expected: '预计新增客户50-100人，营业额提升20-30%'
            },
            {
                name: '新人礼包套餐',
                description: '为新客户准备价值超高的组合套餐',
                steps: [
                    '设计性价比超高的新手套餐，售价{{price}}元',
                    '制作精美的套餐介绍卡片',
                    '设置推荐奖励机制，老客户推荐新客户双方都有优惠',
                    '在本地生活平台(美团/点评)投放广告',
                    '建立新用户微信群，后续持续运营'
                ],
                copy: '🔥{{storeType}}超级新人礼包！原价{{originalPrice}}元的套餐，现在只需{{price}}元！包含{{products}}，仅限首次到店使用！{{city}}的小伙伴千万别错过！',
                videoScript: '场景1：拆箱展示套餐内容\n场景2：品尝过程展示\n场景3：价格对比\n时长：20-40秒',
                expected: '预计转化率40-60%，客单价提升15-20%'
            },
            {
                name: '朋友圈集赞免费领',
                description: '客户发朋友圈集赞可免费获得产品',
                steps: [
                    '设计集赞活动规则(如集28赞送指定产品)',
                    '制作精美的海报和文案模板',
                    '设置专属活动时间段',
                    '培训收银员核对点赞数量',
                    '及时兑现承诺提升客户信任'
                ],
                copy: '🎁{{storeType}}朋友圈集赞活动开始啦！转发本条朋友圈集满28个赞，即可免费获得价值{{value}}元的{{product}}！仅限前100名，快来参加吧！',
                videoScript: '拍摄客户参与活动的真实场景\n展示集赞过程和领取产品\n客户真实好评反馈\n时长：30-45秒',
                expected: '预计获取精准客户100-200人，品牌曝光5000+次'
            }
        ],
        repeatPurchase: [
            {
                name: '会员积分系统',
                description: '消费累计积分，积分可兑换礼品或抵扣现金',
                steps: [
                    '设定积分规则：每消费1元积1分',
                    '设置积分兑换礼品目录',
                    '制作会员卡(实体/电子)',
                    '培训员工积分操作流程',
                    '定期推送积分余额和兑换提醒'
                ],
                copy: '✨{{storeType}}会员积分活动上线！每消费1元积1分，积分可兑换超值礼品！您当前有{{points}}积分，可兑换{{products}}，快来使用吧！',
                videoScript: '介绍积分获取方式\n展示积分兑换流程\n展示可兑换的精美礼品\n时长：20-30秒',
                expected: '预计复购率提升30-40%，客户忠诚度显著提高'
            },
            {
                name: '老顾客专属优惠日',
                description: '每周/每月设定VIP客户专享日',
                steps: [
                    '确定会员日时间(如每月8号)',
                    '设计会员日专属优惠(如全场8折)',
                    '提前3天通过短信/微信通知会员',
                    '会员日当天增加人手保证服务质量',
                    '收集反馈优化下次活动'
                ],
                copy: '🎉VIP会员日来啦！{{storeType}}每月8号会员专享全场8折优惠！您是我们的尊贵老客户，凭手机号即可享受，期待您的大驾光临！',
                videoScript: '展示会员日热闹场景\n采访几位VIP客户\n展示优惠力度\n时长：15-25秒',
                expected: '预计会员日客流量提升50-80%，营业额翻倍'
            },
            {
                name: '消费满额返现活动',
                description: '累计消费达到一定金额返现或赠送优惠券',
                steps: [
                    '设置阶梯式返现规则(满500返50,满1000返120)',
                    '记录客户累计消费金额',
                    '消费达标后自动发送返现券',
                    '设置返现券有效期促进及时使用',
                    '统计活动效果并优化规则'
                ],
                copy: '💰消费返现活动开始！在{{storeType}}累计消费满500元返50元，满1000元返120元！返现券已自动发放到您的账户，下次消费可直接抵扣！',
                videoScript: '解释返现规则\n展示返现券使用流程\n展示实际优惠金额\n时长：15-30秒',
                expected: '预计平均客单价提升25-35%,客户粘性显著增强'
            }
        ],
        increaseRevenue: [
            {
                name: '限时套餐升级',
                description: '将常规产品升级为高价值套餐',
                steps: [
                    '分析热销单品,设计配套产品组合',
                    '设置套餐价格(比单品总价优惠15-20%)',
                    '培训员工主动推荐套餐升级',
                    '制作套餐宣传物料',
                    '限时一周制造稀缺感'
                ],
                copy: '⏰限时3天！{{storeType}}超值套餐升级活动！原价{{originalPrice}}元的套餐，现在只需{{price}}元！包含{{products}}，仅限本周，快来升级吧！',
                videoScript: '展示单品和套餐对比\n突出价格优势\n限时倒计时效果\n时长：15-25秒',
                expected: '预计客单价提升30-40%,营业额增长25-35%'
            },
            {
                name: '节日限量特供',
                description: '推出节日限定产品,提高客单价',
                steps: [
                    '根据节日特点设计限定产品',
                    '采购节日特色原材料',
                    '提前一周开始预热宣传',
                    '设置限时限量制造稀缺',
                    '节日结束后产品下架'
                ],
                copy: '🎊{{festival}}限定特供！{{storeType}}推出节日专属{{product}}，仅限{{festival}}期间供应！独特口味，错过再等一年！{{city}}的小伙伴们快来尝鲜！',
                videoScript: '展示节日氛围和产品\n特写产品精美外观\n客户品尝反应\n时长：20-35秒',
                expected: '预计节日营业额提升50-80%,品牌话题度提升'
            },
            {
                name: '多人拼团优惠',
                description: '鼓励客户结伴消费,提升单笔订单金额',
                steps: [
                    '设置2人团、3人团、4人团不同优惠力度',
                    '团购价在原基础上享受折扣',
                    '老客户带新客户额外奖励',
                    '在微信群/朋友圈推广团购',
                    '制作团购专属页面或小程序'
                ],
                copy: '👥好友拼团更优惠！{{storeType}}2人同行9折，3人同行8.5折，4人同行8折！带上你的朋友一起来{{storeType}}享受美食吧！{{city}}的小伙伴们冲啊！',
                videoScript: '展示多人聚餐欢乐场景\n展示拼团操作流程\n突出优惠力度\n时长：20-30秒',
                expected: '预计单笔订单金额提升40-60%,客户自发传播效果显著'
            }
        ]
    };

    // 根据店铺类型调整模板
    const storeModifiers = {
        '奶茶店': {
            product: '奶茶',
            products: '奶茶+小食',
            address: 'XX路店',
            discount: '10',
            originalPrice: 35,
            value: 25
        },
        '餐饮店': {
            product: '招牌菜品',
            products: '主食+饮品+小菜',
            address: 'XX广场店',
            discount: '20',
            originalPrice: 68,
            value: 38
        },
        '理发店': {
            product: '洗剪吹套餐',
            products: '洗剪吹+护理',
            address: 'XX街店',
            discount: '30',
            originalPrice: 128,
            value: 58
        },
        '美容院': {
            product: '基础护理套餐',
            products: '清洁+护肤+按摩',
            address: 'XX中心店',
            discount: '50',
            originalPrice: 298,
            value: 128
        },
        '服装店': {
            product: '时尚单品',
            products: '上衣+裤子+配饰',
            address: 'XX商城店',
            discount: '40',
            originalPrice: 288,
            value: 99
        },
        '超市': {
            product: '日用品套装',
            products: '洗护用品套装',
            address: 'XX社区店',
            discount: '15',
            originalPrice: 58,
            value: 28
        },
        '其他': {
            product: '热门商品',
            products: '精选搭配套餐',
            address: '总店',
            discount: '25',
            originalPrice: 99,
            value: 49
        }
    };

    const modifier = storeModifiers[storeType] || storeModifiers['其他'];

    // 根据预算调整优惠
    let adjustedDiscount = parseInt(modifier.discount);
    if (budget >= 10000) adjustedDiscount += 10;
    else if (budget >= 5000) adjustedDiscount += 5;

    // 选择一个随机方案
    const goalPlans = marketingPlans[goalKey] || marketingPlans.newCustomer;
    const selectedPlan = goalPlans[Math.floor(Math.random() * goalPlans.length)];

    // 计算折后价格
    const discountedPrice = Math.round(price - adjustedDiscount);

    // 生成预期效果
    const expectedCustomer = Math.floor(Math.random() * 50) + 50;
    const expectedRevenue = Math.floor(Math.random() * 15) + 20;

    // 替换模板变量
    return {
        activity: selectedPlan.name,
        description: selectedPlan.description,
        steps: selectedPlan.steps.map(step =>
            step.replace('{{price}}', price)
                .replace('{{discount}}', adjustedDiscount)
                .replace('{{discountedPrice}}', discountedPrice)
        ),
        copy: selectedPlan.copy
            .replace('{{storeType}}', storeType)
            .replace('{{product}}', modifier.product)
            .replace('{{products}}', modifier.products)
            .replace('{{discount}}', adjustedDiscount)
            .replace('{{price}}', price)
            .replace('{{discountedPrice}}', discountedPrice)
            .replace('{{city}}', city)
            .replace('{{address}}', modifier.address)
            .replace('{{value}}', modifier.value)
            .replace('{{originalPrice}}', modifier.originalPrice)
            .replace('{{originalPrice}}', modifier.originalPrice)
            .replace('{{festival}}', getCurrentFestival()),
        videoScript: selectedPlan.videoScript,
        expected: selectedPlan.expected ||
            `预计新增客户${expectedCustomer}-${expectedCustomer + 50}人，营业额提升${expectedRevenue}-${expectedRevenue + 10}%`
    };
}

// 朋友圈文案生成函数
function generateWechatCopy(product, discount, activity) {
    const templates = [
        {
            long: `🎉【${activity}】🎉

亲爱的朋友们！

我们的${product}正在举行${activity}活动！

💰 优惠信息：${discount}

⏰ 活动时间：即日起至库存售罄

为什么值得你拥有？
✅ 品质保证，精选优质原料
✅ 口碑推荐，回头客超90%
✅ 限量供应，先到先得

别犹豫了！机会难得，快来抢购吧！

📍 地址：点击查看定位
📞 咨询：私信联系

#${activity} #${product}`,
            short: `🎉${product}${activity}！${discount}，限量供应，先到先得！📍点击查看定位`,
            image: `${product}产品美图+活动海报`
        },
        {
            long: `🔥【重磅福利】🔥

小伙伴们注意啦！

${product} 超值优惠来袭！

🎯 ${discount}
🎁 额外福利：前50名购买再送神秘小礼物

你知道吗？
我们的${product}一直深受大家喜爱💕

每天卖出100+份，回头客赞不绝口👍

这次${activity}是我们年度最大的让利！

⏰ 活动时间有限，手慢无！

欢迎👏
✅ 到店选购
✅ 微信预定
✅ 电话订购

📞 订购热线：123-4567-8901

错过再等一年！赶快行动起来吧！`,
            short: `🔥${product}${activity}，${discount}，前50名送神秘礼物！⏰时间有限，手慢无！`,
            image: `产品特写+优惠标签`
        },
        {
            long: `✨【限时特惠】✨

家人们！家人们！

我们的${product}${activity}真的来了！

💥 ${discount}

很多老客户一直在问什么时候有活动
终于等到今天！🎊

品质不变，价格更优
这是我们给新老客户的最大回馈❤️

📅 活动时间：本周内有效
📍 地点：点击导航
💳 支付方式：微信/支付宝/现金

温馨提示：
由于优惠力度较大，库存有限
建议提前预定哦～

欢迎转发分享，让更多人享受优惠！

有问题随时私信我💌`,
            short: `✨${product}${activity}开始！${discount}，本周有效，库存有限，建议预定！`,
            image: `产品合集+活动价标签`
        }
    ];

    // 随机选择一个模板
    const template = templates[Math.floor(Math.random() * templates.length)];

    // 添加配图建议
    let imageSuggestion = template.image;
    if (product.includes('奶茶') || product.includes('饮品')) {
        imageSuggestion = '奶茶产品精美特写+吸管+配料，明亮背景';
    } else if (product.includes('餐') || product.includes('食')) {
        imageSuggestion = '美食成品图+餐具+配菜，暖色调';
    } else if (product.includes('发') || product.includes('美')) {
        imageSuggestion = '前后对比图+工具+环境，专业感';
    } else if (product.includes('服')) {
        imageSuggestion = '产品实拍+模特试穿+细节图';
    }

    return {
        longCopy: template.long,
        shortCopy: template.short,
        imageSuggestion: imageSuggestion
    };
}

// 节日营销方案生成函数
function generateFestivalPlan(festival) {
    const festivals = {
        '情人节': {
            date: '2月14日',
            theme: '浪漫爱情',
            activity: '情侣套餐、买一送一、第二件半价',
            emotion: '浪漫、温馨、甜蜜'
        },
        '五一': {
            date: '5月1日',
            theme: '劳动光荣',
            activity: '劳动套餐、团体优惠、拼团特价',
            emotion: '活力、奋斗、休闲'
        },
        '国庆': {
            date: '10月1日',
            theme: '爱国情怀、国庆狂欢',
            activity: '国庆套餐、满减优惠、抽奖活动',
            emotion: '爱国、喜庆、团聚'
        },
        '春节': {
            date: '农历正月初一',
            theme: '团圆年味',
            activity: '年夜饭套餐、年货礼包、新年特惠',
            emotion: '团圆、喜庆、年味'
        },
        '中秋': {
            date: '农历八月十五',
            theme: '团圆赏月',
            activity: '团圆套餐、月饼礼盒、赏月套餐',
            emotion: '团圆、思念、温馨'
        },
        '圣诞': {
            date: '12月25日',
            theme: '圣诞狂欢',
            activity: '圣诞套餐、圣诞礼物、跨年特惠',
            emotion: '狂欢、惊喜、温馨'
        },
        '元旦': {
            date: '1月1日',
            theme: '新年新气象',
            activity: '新年套餐、开门红活动、新年礼物',
            emotion: '新年、希望、新气象'
        }
    };

    const festivalData = festivals[festival] || festivals['春节'];

    const marketingTypes = [
        {
            name: `${festival}限定套餐`,
            strategy: `推出${festival}主题套餐,营造${festivalData.emotion}氛围,满足节日消费需求`,
            keyPoints: [
                '节日主题包装,营造浓厚节日氛围',
                '限量供应,制造稀缺感和紧迫感',
                '价格优惠,比平时套餐便宜15-20%',
                '赠送节日小礼品,增加惊喜元素'
            ],
            promotionChannels: [
                '微信朋友圈预热(提前7天)',
                '抖音短视频展示套餐内容',
                '本地生活平台投放广告',
                '门店布置节日主题装饰吸引路人'
            ]
        },
        {
            name: `${festival}买一送一`,
            strategy: `${festival}期间推出买一送一或第二件半价优惠,吸引客户结伴消费`,
            keyPoints: [
                '突出节日氛围和团聚主题',
                '优惠力度大,便于传播',
                '限定节日当天或假期期间',
                '适合朋友聚会、家庭聚餐'
            ],
            promotionChannels: [
                '微信群发好友分享',
                '朋友圈广告海报',
                '门店海报和易拉宝',
                '老客户带新客户双倍奖励'
            ]
        },
        {
            name: `${festival}幸运抽奖`,
            strategy: `消费满一定金额可参与${festival}抽奖活动,奖品丰富有吸引力`,
            keyPoints: [
                '设置多个奖项,增加中奖概率',
                '一等奖价值高,制造话题性',
                '参与门槛低,消费满100元即可',
                '公平公正公开,建立信任'
            ],
            promotionChannels: [
                '小程序/H5抽奖页面',
                '抖音快手直播抽奖',
                '门店现场抽奖海报',
                '社群互动传播'
            ]
        }
    ];

    const copyTemplates = [
        `🎉${festival}特惠来袭！🎉

${festivalData.theme}，${festivalData.activity}！

⏰ ${festivalData.date}当天有效
📍 地址：点击查看
💝 还有精美礼品相送

别犹豫了！带上家人朋友一起来吧！

#${festival} #节日优惠`,

        `✨${festival}特别企划✨

一年一度${festival}!
我们准备了超值惊喜！

${festivalData.activity}

🎁 消费满额送节日礼品
🎊 前100名额外优惠

错过再等一年!
赶快预订吧！`,

        `🔥${festival}限量活动🔥

${festival}就要不一样!

${festivalData.activity}

营造${festivalData.emotion}氛围
让您度过一个难忘的${festival}

📞 预定热线：123-4567-8901

欢迎转发分享~

#${festival}快乐`
    ];

    const videoIdeas = [
        `节日氛围渲染视频：
- 开头：节日氛围营造
- 中段：展示特色产品和优惠
- 结尾：引导到店消费
- 时长：15-30秒`,

        `客户见证视频：
- 老客户分享节日消费体验
- 展示真实好评
- 突出性价比
- 时长：30-45秒`,

        `幕后台前视频：
- 节日准备工作花絮
- 产品制作过程
- 员工祝福
- 时长：45-60秒`
    ];

    const selectedMarketing = marketingTypes[Math.floor(Math.random() * marketingTypes.length)];
    const selectedCopy = copyTemplates[Math.floor(Math.random() * copyTemplates.length)];
    const selectedVideo = videoIdeas[Math.floor(Math.random() * videoIdeas.length)];

    return {
        festivalActivity: `${festival} - ${selectedMarketing.name}`,
        activityStrategy: selectedMarketing.strategy,
        keyPoints: selectedMarketing.keyPoints,
        promotionChannels: selectedMarketing.promotionChannels,
        copywriting: selectedCopy,
        videoCreative: selectedVideo,
        promotionSuggestion: `${festivalData.date}前后7天为最佳推广期，建议提前10天开始预热，节日当天集中引爆，节后3天持续发酵`
    };
}

// 辅助函数 - 获取当前节日
function getCurrentFestival() {
    const festivals = [
        { name: '情人节', month: 2, day: 14 },
        { name: '五一', month: 5, day: 1 },
        { name: '国庆', month: 10, day: 1 },
        { name: '春节', month: 2, day: 10 }, // 大概时间
        { name: '中秋', month: 9, day: 29 }, // 大概时间
        { name: '圣诞节', month: 12, day: 25 },
        { name: '元旦', month: 1, day: 1 }
    ];

    return festivals[Math.floor(Math.random() * festivals.length)].name;
}

// 导出函数供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateMarketingPlan,
        generateWechatCopy,
        generateFestivalPlan
    };
}
