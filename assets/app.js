(function () {
  'use strict';

  var poems = [
    { id: 'yong-e', title: '咏鹅', author: '骆宾王', dynasty: '唐', grade: '一年级上', lines: ['鹅，鹅，鹅，', '曲项向天歌。', '白毛浮绿水，', '红掌拨清波。'], hint: '“浮”写白鹅安闲，“拨”写红掌有力，一静一动。' },
    { id: 'jiang-nan', title: '江南', author: '汉乐府', dynasty: '汉', grade: '一年级上', lines: ['江南可采莲，', '莲叶何田田。', '鱼戏莲叶间。', '鱼戏莲叶东，鱼戏莲叶西，', '鱼戏莲叶南，鱼戏莲叶北。'], hint: '顺着东、西、南、北记住鱼儿穿梭的次序。' },
    { id: 'hua', title: '画', author: '佚名', dynasty: '唐', grade: '一年级上', lines: ['远看山有色，', '近听水无声。', '春去花还在，', '人来鸟不惊。'], hint: '远近、来去、有无，三组对照写出画中景物。' },
    { id: 'feng', title: '风', author: '李峤', dynasty: '唐', grade: '一年级上', lines: ['解落三秋叶，', '能开二月花。', '过江千尺浪，', '入竹万竿斜。'], hint: '从秋叶、春花写到江浪、竹林，由轻到强。' },
    { id: 'chun-xiao', title: '春晓', author: '孟浩然', dynasty: '唐', grade: '一年级下', lines: ['春眠不觉晓，', '处处闻啼鸟。', '夜来风雨声，', '花落知多少。'], hint: '从清晨鸟声想到昨夜风雨，再想到落花。' },
    { id: 'jing-ye-si', title: '静夜思', author: '李白', dynasty: '唐', grade: '一年级下', lines: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。'], hint: '“举头”与“低头”是背诵的动作线索。' },
    { id: 'chi-shang', title: '池上', author: '白居易', dynasty: '唐', grade: '一年级下', lines: ['小娃撑小艇，', '偷采白莲回。', '不解藏踪迹，', '浮萍一道开。'], hint: '小艇划开浮萍，偷偷采莲的踪迹反而显露出来。' },
    { id: 'xiao-chi', title: '小池', author: '杨万里', dynasty: '宋', grade: '一年级下', lines: ['泉眼无声惜细流，', '树阴照水爱晴柔。', '小荷才露尖尖角，', '早有蜻蜓立上头。'], hint: '“才露”接“早有”，写出初夏生机。' },
    { id: 'deng-guan-que-lou', title: '登鹳雀楼', author: '王之涣', dynasty: '唐', grade: '二年级上', lines: ['白日依山尽，', '黄河入海流。', '欲穷千里目，', '更上一层楼。'], hint: '前两句写景，后两句说理；想看得更远，就再登高。' },
    { id: 'wang-lu-shan', title: '望庐山瀑布', author: '李白', dynasty: '唐', grade: '二年级上', lines: ['日照香炉生紫烟，', '遥看瀑布挂前川。', '飞流直下三千尺，', '疑是银河落九天。'], hint: '“挂、飞、落”三个字串起瀑布从远到近的气势。' },
    { id: 'jiang-xue', title: '江雪', author: '柳宗元', dynasty: '唐', grade: '二年级上', lines: ['千山鸟飞绝，', '万径人踪灭。', '孤舟蓑笠翁，', '独钓寒江雪。'], hint: '千、万写空旷，孤、独收束到寒江上的渔翁。' },
    { id: 'cun-ju', title: '村居', author: '高鼎', dynasty: '清', grade: '二年级下', lines: ['草长莺飞二月天，', '拂堤杨柳醉春烟。', '儿童散学归来早，', '忙趁东风放纸鸢。'], hint: '先写二月春景，再写放学儿童，画面由静到动。' },
    { id: 'yong-liu', title: '咏柳', author: '贺知章', dynasty: '唐', grade: '二年级下', lines: ['碧玉妆成一树高，', '万条垂下绿丝绦。', '不知细叶谁裁出，', '二月春风似剪刀。'], hint: '碧玉、丝绦、剪刀，三个比喻写出柳树的色与形。' },
    { id: 'jue-ju-huang-li', title: '绝句', author: '杜甫', dynasty: '唐', grade: '二年级下', lines: ['两个黄鹂鸣翠柳，', '一行白鹭上青天。', '窗含西岭千秋雪，', '门泊东吴万里船。'], hint: '黄、翠、白、青四种颜色，对应近景与远景。' },
    { id: 'shan-xing', title: '山行', author: '杜牧', dynasty: '唐', grade: '三年级上', lines: ['远上寒山石径斜，', '白云生处有人家。', '停车坐爱枫林晚，', '霜叶红于二月花。'], hint: '沿石径上山，看见人家，最后停在火红枫林前。' },
    { id: 'wang-tian-men', title: '望天门山', author: '李白', dynasty: '唐', grade: '三年级上', lines: ['天门中断楚江开，', '碧水东流至此回。', '两岸青山相对出，', '孤帆一片日边来。'], hint: '江开、水回、山出、帆来，四个动态画面连成旅程。' },
    { id: 'yuan-ri', title: '元日', author: '王安石', dynasty: '宋', grade: '三年级下', lines: ['爆竹声中一岁除，', '春风送暖入屠苏。', '千门万户曈曈日，', '总把新桃换旧符。'], hint: '爆竹、屠苏、曈曈日、桃符，都是新年的线索。' },
    { id: 'qing-ming', title: '清明', author: '杜牧', dynasty: '唐', grade: '三年级下', lines: ['清明时节雨纷纷，', '路上行人欲断魂。', '借问酒家何处有？', '牧童遥指杏花村。'], hint: '雨中行人发问，牧童遥指，像一段完整的短故事。' },
    { id: 'mu-jiang-yin', title: '暮江吟', author: '白居易', dynasty: '唐', grade: '四年级上', lines: ['一道残阳铺水中，', '半江瑟瑟半江红。', '可怜九月初三夜，', '露似真珠月似弓。'], hint: '前两句写日落江面，后两句写新月与露珠。' },
    { id: 'ti-xi-lin-bi', title: '题西林壁', author: '苏轼', dynasty: '宋', grade: '四年级上', lines: ['横看成岭侧成峰，', '远近高低各不同。', '不识庐山真面目，', '只缘身在此山中。'], hint: '观察角度不同，所见也不同；由看山写到认识事物。' },
    { id: 'chu-sai', title: '出塞', author: '王昌龄', dynasty: '唐', grade: '四年级上', lines: ['秦时明月汉时关，', '万里长征人未还。', '但使龙城飞将在，', '不教胡马度阴山。'], hint: '明月与边关跨越秦汉，后两句寄托安定边疆的愿望。' },
    { id: 'si-shi-tian-yuan', title: '四时田园杂兴', author: '范成大', dynasty: '宋', grade: '四年级下', lines: ['梅子金黄杏子肥，', '麦花雪白菜花稀。', '日长篱落无人过，', '惟有蜻蜓蛱蝶飞。'], hint: '前两句写作物色彩，后两句用蜻蜓蝴蝶衬托村庄宁静。' },
    { id: 'du-jing-ting-shan', title: '独坐敬亭山', author: '李白', dynasty: '唐', grade: '四年级下', lines: ['众鸟高飞尽，', '孤云独去闲。', '相看两不厌，', '只有敬亭山。'], hint: '众鸟飞尽、孤云飘走，最后只剩诗人与山相看。' },
    { id: 'shi-er', title: '示儿', author: '陆游', dynasty: '宋', grade: '五年级上', lines: ['死去元知万事空，', '但悲不见九州同。', '王师北定中原日，', '家祭无忘告乃翁。'], hint: '唯一放不下的是山河统一，临终嘱托也落在此事。' },
    { id: 'shan-ju-qiu-ming', title: '山居秋暝', author: '王维', dynasty: '唐', grade: '五年级上', lines: ['空山新雨后，天气晚来秋。', '明月松间照，清泉石上流。', '竹喧归浣女，莲动下渔舟。', '随意春芳歇，王孙自可留。'], hint: '雨后空山依次出现明月、清泉、浣女与渔舟。' },
    { id: 'you-zi-yin', title: '游子吟', author: '孟郊', dynasty: '唐', grade: '五年级下', lines: ['慈母手中线，游子身上衣。', '临行密密缝，意恐迟迟归。', '谁言寸草心，报得三春晖。'], hint: '手中线与身上衣相连，寸草心与三春晖相照。' },
    { id: 'liang-zhou-ci', title: '凉州词', author: '王之涣', dynasty: '唐', grade: '五年级下', lines: ['黄河远上白云间，', '一片孤城万仞山。', '羌笛何须怨杨柳，', '春风不度玉门关。'], hint: '黄河、白云、孤城、群山铺开苍凉边塞。' },
    { id: 'ma-shi', title: '马诗', author: '李贺', dynasty: '唐', grade: '六年级下', lines: ['大漠沙如雪，', '燕山月似钩。', '何当金络脑，', '快走踏清秋。'], hint: '沙似雪、月似钩，最后借骏马抒发建功愿望。' },
    { id: 'zhu-shi', title: '竹石', author: '郑燮', dynasty: '清', grade: '六年级下', lines: ['咬定青山不放松，', '立根原在破岩中。', '千磨万击还坚劲，', '任尔东西南北风。'], hint: '咬定、立根、坚劲，层层写出竹子的坚定。' },
    { id: 'jiang-jin-jiu', title: '将进酒（节选）', author: '李白', dynasty: '唐', grade: '课外', lines: ['君不见黄河之水天上来，', '奔流到海不复回。', '君不见高堂明镜悲白发，', '朝如青丝暮成雪。'], hint: '黄河奔流与青丝成雪，都在感叹时光一去不返。' },
    { id: 'huang-he-lou', title: '黄鹤楼', author: '崔颢', dynasty: '唐', grade: '课外', lines: ['昔人已乘黄鹤去，此地空余黄鹤楼。', '黄鹤一去不复返，白云千载空悠悠。', '晴川历历汉阳树，芳草萋萋鹦鹉洲。', '日暮乡关何处是？烟波江上使人愁。'], hint: '由传说写到眼前晴川，最后在日暮烟波中落到乡愁。' },
    { id: 'ti-du-cheng', title: '题都城南庄', author: '崔护', dynasty: '唐', grade: '课外', lines: ['去年今日此门中，', '人面桃花相映红。', '人面不知何处去，', '桃花依旧笑春风。'], hint: '去年与今日、人面与桃花，两组对照写物是人非。' },
    { id: 'jian-ke', title: '剑客', author: '贾岛', dynasty: '唐', grade: '课外', lines: ['十年磨一剑，', '霜刃未曾试。', '今日把示君，', '谁有不平事？'], hint: '十年磨剑，只等今日出鞘；短句里藏着抱负与锋芒。' }
  ];

  var gradeOptions = ['全部', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '课外'];
  var state = {
    selectedId: poems[0].id,
    grade: '全部',
    query: '',
    favoritesOnly: false,
    mode: 'read',
    revealed: 0,
    favorites: readStoredArray('poem-favorites'),
    mastery: readStoredObject('poem-mastery')
  };

  var elements = {
    appShell: document.querySelector('.app-shell'),
    poemList: document.getElementById('poemList'),
    emptyState: document.getElementById('emptyState'),
    resultCount: document.getElementById('resultCount'),
    gradeFilters: document.getElementById('gradeFilters'),
    searchInput: document.getElementById('searchInput'),
    clearSearch: document.getElementById('clearSearch'),
    favoriteFilter: document.getElementById('favoriteFilter'),
    favoriteButton: document.getElementById('favoriteButton'),
    detailGrade: document.getElementById('detailGrade'),
    detailTitle: document.getElementById('detailTitle'),
    detailDynasty: document.getElementById('detailDynasty'),
    detailAuthor: document.getElementById('detailAuthor'),
    detailHint: document.getElementById('detailHint'),
    poemLines: document.getElementById('poemLines'),
    masteryBadge: document.getElementById('masteryBadge'),
    masteredCount: document.getElementById('masteredCount'),
    reciteActions: document.getElementById('reciteActions'),
    revealNext: document.getElementById('revealNext'),
    resetRecite: document.getElementById('resetRecite'),
    poemPosition: document.getElementById('poemPosition'),
    toast: document.getElementById('toast')
  };
  var toastTimer = null;

  function readStoredArray(key) {
    try {
      var value = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  }

  function readStoredObject(key) {
    try {
      var value = JSON.parse(localStorage.getItem(key) || '{}');
      return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    } catch (error) {
      return {};
    }
  }

  function store(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      showToast('本次进度暂时无法保存');
    }
  }

  function getPoem(id) {
    for (var i = 0; i < poems.length; i += 1) {
      if (poems[i].id === id) return poems[i];
    }
    return poems[0];
  }

  function isFavorite(id) {
    return state.favorites.indexOf(id) !== -1;
  }

  function getFilteredPoems() {
    var query = state.query.toLowerCase();
    return poems.filter(function (poem) {
      var gradeMatch = state.grade === '全部' || poem.grade.indexOf(state.grade) === 0;
      var favoriteMatch = !state.favoritesOnly || isFavorite(poem.id);
      var haystack = [poem.title, poem.author, poem.dynasty, poem.grade, poem.lines.join('')].join(' ').toLowerCase();
      var queryMatch = !query || haystack.indexOf(query) !== -1;
      return gradeMatch && favoriteMatch && queryMatch;
    });
  }

  function masteryLabel(level) {
    if (level === 'mastered') return '已熟记';
    if (level === 'familiar') return '渐熟';
    if (level === 'learning') return '练习中';
    return '未开始';
  }

  function renderFilters() {
    var fragment = document.createDocumentFragment();
    gradeOptions.forEach(function (grade) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = grade;
      button.setAttribute('data-grade', grade);
      button.className = grade === state.grade ? 'is-active' : '';
      fragment.appendChild(button);
    });
    elements.gradeFilters.innerHTML = '';
    elements.gradeFilters.appendChild(fragment);
  }

  function renderList() {
    var filtered = getFilteredPoems();
    var fragment = document.createDocumentFragment();
    elements.resultCount.textContent = filtered.length + ' 首';
    elements.emptyState.hidden = filtered.length !== 0;
    elements.poemList.style.display = filtered.length ? 'block' : 'none';

    filtered.forEach(function (poem) {
      var button = document.createElement('button');
      var title = document.createElement('span');
      var meta = document.createElement('span');
      var grade = document.createElement('span');
      var author = document.createElement('span');
      var dot = document.createElement('span');
      var level = state.mastery[poem.id] || '';

      button.type = 'button';
      button.className = 'poem-item' + (poem.id === state.selectedId ? ' is-active' : '');
      button.setAttribute('data-id', poem.id);
      button.setAttribute('role', 'listitem');
      title.className = 'poem-item-title';
      title.textContent = poem.title + (isFavorite(poem.id) ? '  ·  ★' : '');
      meta.className = 'poem-item-meta';
      grade.textContent = poem.grade;
      author.textContent = poem.dynasty + ' · ' + poem.author;
      dot.className = 'item-state ' + level;
      dot.setAttribute('aria-label', masteryLabel(level));
      meta.appendChild(grade);
      meta.appendChild(author);
      button.appendChild(title);
      button.appendChild(meta);
      button.appendChild(dot);
      fragment.appendChild(button);
    });

    elements.poemList.innerHTML = '';
    elements.poemList.appendChild(fragment);
  }

  function renderDetail() {
    var poem = getPoem(state.selectedId);
    var level = state.mastery[poem.id] || '';
    elements.detailGrade.textContent = poem.grade;
    elements.detailGrade.className = 'grade-badge' + (poem.grade === '课外' ? ' extra' : '');
    elements.detailTitle.textContent = poem.title;
    elements.detailDynasty.textContent = poem.dynasty;
    elements.detailAuthor.textContent = poem.author;
    elements.detailHint.textContent = poem.hint;
    elements.masteryBadge.textContent = masteryLabel(level);
    elements.favoriteButton.textContent = isFavorite(poem.id) ? '★' : '☆';
    elements.favoriteButton.className = 'favorite-button' + (isFavorite(poem.id) ? ' is-active' : '');
    elements.favoriteButton.setAttribute('aria-pressed', isFavorite(poem.id) ? 'true' : 'false');

    var fragment = document.createDocumentFragment();
    poem.lines.forEach(function (line, index) {
      var lineElement = document.createElement('p');
      var hidden = state.mode === 'recite' && index >= state.revealed;
      lineElement.className = 'poem-line' + (hidden ? ' is-hidden' : '');
      lineElement.textContent = line;
      lineElement.setAttribute('data-line', String(index));
      if (hidden) lineElement.setAttribute('aria-label', '第 ' + (index + 1) + ' 句，点击揭晓');
      fragment.appendChild(lineElement);
    });
    elements.poemLines.innerHTML = '';
    elements.poemLines.appendChild(fragment);
    elements.reciteActions.hidden = state.mode !== 'recite';
    elements.revealNext.disabled = state.revealed >= poem.lines.length;
    elements.revealNext.textContent = state.revealed >= poem.lines.length ? '已全部揭晓' : '揭晓下一句';

    var currentIndex = 0;
    for (var i = 0; i < poems.length; i += 1) {
      if (poems[i].id === poem.id) currentIndex = i;
    }
    elements.poemPosition.textContent = (currentIndex + 1) + ' / ' + poems.length;

    var assessmentButtons = document.querySelectorAll('[data-level]');
    for (var j = 0; j < assessmentButtons.length; j += 1) {
      assessmentButtons[j].className = assessmentButtons[j].getAttribute('data-level') === level ? 'is-active' : '';
    }
    updateMasteredCount();
  }

  function selectPoem(id, openStudy) {
    state.selectedId = id;
    state.revealed = state.mode === 'recite' ? 0 : getPoem(id).lines.length;
    renderList();
    renderDetail();
    if (openStudy) elements.appShell.classList.add('show-study');
    var studyPanel = document.getElementById('studyPanel');
    studyPanel.scrollTop = 0;
  }

  function setMode(mode) {
    state.mode = mode;
    state.revealed = mode === 'read' ? getPoem(state.selectedId).lines.length : 0;
    var buttons = document.querySelectorAll('[data-mode]');
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].className = buttons[i].getAttribute('data-mode') === mode ? 'is-active' : '';
    }
    renderDetail();
  }

  function toggleFavorite() {
    var id = state.selectedId;
    var index = state.favorites.indexOf(id);
    if (index === -1) {
      state.favorites.push(id);
      showToast('已收入诗笺');
    } else {
      state.favorites.splice(index, 1);
      showToast('已取消收藏');
    }
    store('poem-favorites', state.favorites);
    renderList();
    renderDetail();
  }

  function setMastery(level) {
    state.mastery[state.selectedId] = level;
    store('poem-mastery', state.mastery);
    renderList();
    renderDetail();
    showToast(level === 'mastered' ? '又熟记了一首' : '已记下本次状态');
  }

  function updateMasteredCount() {
    var count = 0;
    Object.keys(state.mastery).forEach(function (id) {
      if (state.mastery[id] === 'mastered') count += 1;
    });
    elements.masteredCount.textContent = String(count);
  }

  function showToast(message) {
    if (toastTimer) window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    toastTimer = window.setTimeout(function () {
      elements.toast.classList.remove('is-visible');
    }, 1700);
  }

  function movePoem(direction) {
    var currentIndex = 0;
    for (var i = 0; i < poems.length; i += 1) {
      if (poems[i].id === state.selectedId) currentIndex = i;
    }
    var nextIndex = (currentIndex + direction + poems.length) % poems.length;
    selectPoem(poems[nextIndex].id, true);
  }

  function resetAllFilters() {
    state.grade = '全部';
    state.query = '';
    state.favoritesOnly = false;
    elements.searchInput.value = '';
    elements.searchInput.parentNode.classList.remove('has-value');
    elements.favoriteFilter.classList.remove('is-active');
    elements.favoriteFilter.setAttribute('aria-pressed', 'false');
    renderFilters();
    renderList();
  }

  function updateAppHeight() {
    var height = window.innerHeight;
    if (window.visualViewport && window.visualViewport.height) height = window.visualViewport.height;
    document.documentElement.style.setProperty('--app-height', height + 'px');
  }

  elements.gradeFilters.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-grade]');
    if (!button) return;
    state.grade = button.getAttribute('data-grade');
    renderFilters();
    renderList();
  });

  elements.poemList.addEventListener('click', function (event) {
    var item = event.target.closest('.poem-item');
    if (item) selectPoem(item.getAttribute('data-id'), true);
  });

  elements.searchInput.addEventListener('input', function () {
    state.query = elements.searchInput.value.trim();
    elements.searchInput.parentNode.classList.toggle('has-value', Boolean(state.query));
    renderList();
  });

  elements.clearSearch.addEventListener('click', function () {
    state.query = '';
    elements.searchInput.value = '';
    elements.searchInput.parentNode.classList.remove('has-value');
    elements.searchInput.focus();
    renderList();
  });

  elements.favoriteFilter.addEventListener('click', function () {
    state.favoritesOnly = !state.favoritesOnly;
    elements.favoriteFilter.classList.toggle('is-active', state.favoritesOnly);
    elements.favoriteFilter.setAttribute('aria-pressed', state.favoritesOnly ? 'true' : 'false');
    renderList();
  });

  document.getElementById('randomButton').addEventListener('click', function () {
    var choices = getFilteredPoems();
    if (!choices.length) choices = poems;
    var choice = choices[Math.floor(Math.random() * choices.length)];
    selectPoem(choice.id, true);
  });

  document.getElementById('resetFilters').addEventListener('click', resetAllFilters);
  elements.favoriteButton.addEventListener('click', toggleFavorite);
  document.getElementById('backToList').addEventListener('click', function () { elements.appShell.classList.remove('show-study'); });
  document.getElementById('previousPoem').addEventListener('click', function () { movePoem(-1); });
  document.getElementById('nextPoem').addEventListener('click', function () { movePoem(1); });

  document.querySelector('.mode-switch').addEventListener('click', function (event) {
    var button = event.target.closest('button[data-mode]');
    if (button) setMode(button.getAttribute('data-mode'));
  });

  elements.revealNext.addEventListener('click', function () {
    var poem = getPoem(state.selectedId);
    if (state.revealed < poem.lines.length) state.revealed += 1;
    renderDetail();
  });

  elements.resetRecite.addEventListener('click', function () {
    state.revealed = 0;
    renderDetail();
  });

  elements.poemLines.addEventListener('click', function (event) {
    var line = event.target.closest('.poem-line.is-hidden');
    if (!line) return;
    var lineIndex = Number(line.getAttribute('data-line'));
    if (lineIndex >= state.revealed) state.revealed = lineIndex + 1;
    renderDetail();
  });

  document.getElementById('assessment').addEventListener('click', function (event) {
    var button = event.target.closest('button[data-level]');
    if (button) setMastery(button.getAttribute('data-level'));
  });

  window.addEventListener('resize', updateAppHeight);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', updateAppHeight);

  updateAppHeight();
  renderFilters();
  renderList();
  state.revealed = poems[0].lines.length;
  renderDetail();
}());
